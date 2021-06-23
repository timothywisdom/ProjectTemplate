import { AxiosResponse } from "axios";
import { ErrorCategory, ErrorDomain } from "../errors/types";
import ApplicationError from "../errors/ApplicationError";
import fetchRetry from "./fetchRetry";
import { RequestOptions } from "./fetchTypes";
import { ServerErrorResponse } from "./types";

const applicationFetchAsync = async <TResponse extends Response>(
	requestOptions: RequestOptions,
	jwt: string
): Promise<TResponse> => {
	const httpResponse: AxiosResponse | undefined = await fetchRetry(
		requestOptions,
		jwt
	);
	const objectResponse: TResponse = await processResponseAsync<TResponse>(
		requestOptions,
		httpResponse
	);

	return objectResponse;
};

const processResponseAsync = async <TResponse extends Response>(
	requestOptions: RequestOptions,
	httpResponse: AxiosResponse | undefined
): Promise<TResponse> => {
	// Check response code
	if (!httpResponse || httpResponse.status >= 400) {
		const statusText =
			(httpResponse && httpResponse.statusText) || "Fetch Error";
		const statusCode = (httpResponse && httpResponse.status) || "0";

		let category: ErrorCategory;
		switch (statusCode) {
			case 400:
				category = ErrorCategory.BadRequest;
				break;
			case 401:
				category = ErrorCategory.Unauthorised;
				break;
			case 403:
				category = ErrorCategory.Forbidden;
				break;
			case 429:
				category = ErrorCategory.TooManyRequests;
				break;
			case 500:
				category = ErrorCategory.Server;
				break;
			default:
				category = ErrorCategory.General;
		}
		const domain = ErrorDomain.Client;

		console.log("Application Fetch ERROR", {
			statusText,
			statusCode,
			category,
			domain,
			requestUrl: requestOptions.url,
			httpResponse,
		});
		throw new ApplicationError(
			statusText,
			category,
			domain,
			httpResponse,
			requestOptions,
			`HTTP Fetch Error: ${statusCode}`
		);
	}

	// Parse response payload
	const response: TResponse = httpResponse.data || {};

	// Check response format
	if (isErrorResponse(response)) {
		const category =
			response.error === "sessionExpired"
				? ErrorCategory.Unauthorised
				: response.error === "Server Error"
				? ErrorCategory.Server
				: ErrorCategory.General;
		const domain = ErrorDomain.Client;
		console.log("Application Fetch Response ERROR", {
			category,
			domain,
			requestUrl: requestOptions.url,
			response,
		});
		throw new ApplicationError(
			response.error,
			category,
			domain,
			httpResponse,
			requestOptions,
			response.errorDescription
		);
	}

	return response;
};

const isErrorResponse = (response: any): response is ServerErrorResponse => {
	return typeof response.error !== "undefined";
};

export default applicationFetchAsync;
