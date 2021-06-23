import configuration from "@client/config/configuration";
import { AxiosRequestConfig } from "axios";

export const DOMAINS = {
	API_V1_PREFIX: "/apiv1",
	API_V2_PREFIX: "/apiv2",
	AUTH_V1_PREFIX: configuration.domains.login,
	CHECKOUT_PREFIX: configuration.domains.checkout,
};

export interface RequestOptions extends AxiosRequestConfig {
	url: string; // Request endpoint (auto prefixed with /apiv2)
	body?: object | string; // Body of POST data
	contentType?: string;
}
