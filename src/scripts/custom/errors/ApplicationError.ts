import { AxiosResponse } from "axios";
import { RequestOptions } from "../fetch/fetchTypes";
import { ErrorCategory, ErrorDomain } from "./types";

export default class ApplicationError extends Error {
	public category: ErrorCategory;
	public domain: ErrorDomain;
	public requestOptions: RequestOptions;
	public httpResponse: AxiosResponse | undefined;
	public description: string;

	public constructor(
		message: string,
		category: ErrorCategory = ErrorCategory.General,
		domain: ErrorDomain = ErrorDomain.Client,
		httpResponse: AxiosResponse | undefined,
		requestOptions: RequestOptions,
		description?: string
	) {
		super(message);
		this.category = category;
		this.domain = domain;
		this.httpResponse = httpResponse;
		this.requestOptions = requestOptions;
		this.description = description || "";
	}
}
