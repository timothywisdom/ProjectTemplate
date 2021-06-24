/**
 * Based on https://github.com/jonbern/fetch-retry/blob/master/index.js
 */

import axios, { AxiosResponse } from "axios";
import composeRequest from "./composeRequest";
import { RequestOptions } from "./fetchTypes";

const FETCH_RETRY_ATTEMPTS = 3;

const fetchRetry = async <TResponse extends Response | undefined = undefined>(
	requestOptions: RequestOptions,
	jwt: string
): Promise<AxiosResponse<TResponse>> => {
	const wrappedFetch = async (
		attempt: number
	): Promise<AxiosResponse<TResponse>> => {
		const axiosRequest = composeRequest(requestOptions, jwt, attempt);
		console.log(`Fetch Retry Requesting ${requestOptions.url}`, {
			attempt,
			requestOptions,
			axiosRequest,
		});
		try {
			const response = await axios(axiosRequest);
			console.log(
				`Fetch Retry Response Resolved Happily`,
				requestOptions.url,
				{ response },
				{ attempt }
			);
			return response;
		} catch (error) {
			console.log(`Fetch Retry Errored on ${requestOptions.url}`, {
				attempt,
				error,
			});
			if (
				attempt < FETCH_RETRY_ATTEMPTS &&
				requestOptions.url.indexOf("ClientSideError") === -1
			) {
				console.log(`Fetch Retry will retry`);
				return wrappedFetch(++attempt);
			} else {
				console.log(`Fetch Retry Rejected Sadly`, requestOptions.url, {
					attempt,
				});
				throw error; // throw the error so it gets picked up by apiMiddleware and gets logged
			}
		}
	};

	return wrappedFetch(1);
};

export default fetchRetry;
