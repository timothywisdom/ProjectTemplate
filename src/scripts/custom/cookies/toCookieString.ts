import kebabCase from "lodash/kebabCase";
import { Cookie } from "./types";

const toCookieString = (cookie: Cookie): string => {
	const cookieStringBase: string = `${cookie.name}=${encodeURIComponent(
		cookie.value
	)}`;
	const cookieStringOptionals: string = Object.keys(cookie)
		.filter((k) => k !== "name" && k !== "value")
		.map((k) => `${kebabCase(k)}=${cookie[k]}`)
		.reduce(
			(combined: string, segment: string) =>
				combined.concat(`;${segment}`),
			""
		);

	return cookieStringBase.concat(cookieStringOptionals);
};

export default toCookieString;
