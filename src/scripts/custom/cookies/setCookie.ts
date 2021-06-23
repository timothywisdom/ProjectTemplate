import toCookieString from "./toCookieString";
import { Cookie } from "./types";

export function setCookie(name: string, value: string): boolean;

export function setCookie(cookie: Cookie): boolean;

// Method overloading in TS
export function setCookie(
	nameOrCookie: Cookie | string,
	value?: string
): boolean {
	if (document && document.cookie) {
		if (typeof nameOrCookie === "string" && typeof value !== "undefined") {
			document.cookie = toCookieString({
				name: nameOrCookie,
				value: value,
			});
			return true;
		} else {
			document.cookie = toCookieString(nameOrCookie as Cookie);
			return true;
		}
	}

	return false;
}
