import toCookie from "./toCookie";
import { Cookie } from "./types";

const getFullCookie = (name: string): Cookie | undefined => {
	const allCookies = document.cookie;

	if (allCookies) {
		const matchingCookies = allCookies
			.split(";")
			.filter((cookieSegment) =>
				cookieSegment.trimLeft().startsWith(`${name}=`)
			);
		const cookie = matchingCookies.length
			? toCookie(matchingCookies[0])
			: undefined;
		return cookie as Cookie;
	}
};

export default getFullCookie;
