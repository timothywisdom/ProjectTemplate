import { AuthenticatedState } from "./types";

const setAuthenticatedState = (authenticatedState: AuthenticatedState) => ({
	type: "USER_SET_AUTHENTICATED_STATE",
	payload: {
		authenticatedState: authenticatedState,
	},
});

export { setAuthenticatedState };
