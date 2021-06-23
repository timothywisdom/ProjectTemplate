import { Action } from "../types";
import { UserState } from "./types";

export const initialState: UserState = {
	authenticatedState: "Unknown",
	jwt: "",
};

export const userReducer = (state = initialState, action: Action) => {
	switch (action.type) {
		case "USER_SET_AUTHENTICATED_STATE":
			return {
				...state,
				authenticatedState: action.payload.authenticatedState,
			};
		default:
			return state;
	}
};
