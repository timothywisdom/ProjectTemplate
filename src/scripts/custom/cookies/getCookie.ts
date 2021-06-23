import getFullCookie from "./getFullCookie";

const getCookie = (name: string): string | undefined => {
	const fullCookie = getFullCookie(name);
	return fullCookie ? fullCookie.value : undefined;
};

export default getCookie;
