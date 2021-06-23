import camelCase from "lodash/camelCase";
import { Cookie } from "./types";

const toCookie = (cookieString: string): Cookie => {
	const cookiePair = cookieString.split("=");
	if (cookiePair.length === 2) {
		return {
			name: camelCase(cookiePair[0].trim()),
			value: decodeURIComponent(cookiePair[1].trim()),
		};
	}

	return { name: "", value: "" };
};

export default toCookie;
