import { UserState } from "./user/types";

export interface ApplicationState {
	user: UserState;
}

export interface Action {
	type: string;
	payload: {
		[key: string]: any;
	};
}
