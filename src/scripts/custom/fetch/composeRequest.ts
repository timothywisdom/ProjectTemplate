import { AxiosRequestConfig } from "axios";
import configuration from "../../../config/configuration";
import { Environment } from "../../../config/types";
import { RequestOptions } from "./fetchTypes";

const composeRequest = (
	requestOptions: RequestOptions,
	jwt: string,
	attempt: number
): AxiosRequestConfig => {
	const { url, method, body, contentType, withCredentials } = requestOptions;

	const requestInit: AxiosRequestConfig = {
		url,
		method: method || "GET",
		timeout:
			configuration.env === Environment.Dev
				? 0
				: attempt <= 1
				? 10000
				: attempt === 2
				? 30000
				: 60000, // ms (0 == no timeout)
		withCredentials:
			typeof withCredentials !== "undefined" ? withCredentials : true,
		maxRedirects: 5,
		maxContentLength: 4096000, // the max size of the http response content in bytes allowed
		responseType: "json",
		validateStatus: function (status: number) {
			return status >= 200;
		},
		headers: {
			Accept: "application/json",
		},
	};

	// Set Authorization Header
	if (jwt) {
		requestInit.headers = {
			...requestInit.headers,
			Authorization: `bearer ${jwt}`,
		};
	}

	// Check if request has a payload
	if (
		requestInit.method &&
		["POST", "PUT"].indexOf(requestInit.method) > -1
	) {
		if (contentType === "multipart/form-data") {
			return {
				url,
				method: "POST",
				timeout:
					attempt <= 1
						? 10000
						: attempt === 2
						? 30000
						: configuration.env === Environment.Dev
						? 0
						: 60000, // ms (0 == no timeout)
				maxRedirects: 5,
				maxContentLength: 8000,
				responseType: "json",
				validateStatus: function (status: number) {
					return status >= 200;
				},
				headers: {
					Accept: "*/*",
					"Content-Type": "multipart/form-data",
				},
				data: body,
			};
		}
		if (typeof body === "string") {
			requestInit.headers = {
				...requestInit.headers,
				"Content-Type": "text/plain",
			};
			requestInit.data = body;
		} else {
			requestInit.headers = {
				...requestInit.headers,
				"Content-Type": "application/json",
			};
		}
		requestInit.data = body ? JSON.stringify(body) : undefined;
	}

	console.log("Request Compose", { requestInit });

	return requestInit;
};

export default composeRequest;
