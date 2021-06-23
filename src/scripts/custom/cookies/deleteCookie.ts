import { setCookie } from "./setCookie";
import { Cookie } from "./types";

const deleteCookie = (name: string, domain?: string): boolean => {
	const cookieToDelete: Cookie = {
		name,
		value: "",
		maxAge: 0,
	};
	// NOTE: If the domain is not the full domain (aka www.example.com), adding this domain param will work and the cookie will be deleted. Otherwise, leave off the domain param and the browser will delete the cookie whose domain is the full domain
	if (domain) {
		cookieToDelete.domain = domain;
	}
	return setCookie(cookieToDelete);
};

export default deleteCookie;
