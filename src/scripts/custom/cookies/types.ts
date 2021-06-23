export interface Cookie {
	name: string;
	value: string;
	path?: string;
	domain?: string;
	maxAge?: number;
	expires?: string;
	secure?: boolean;
	[index: string]: any;
}
