import { UserState } from "./user/types";
import { Action as ReduxAction } from "redux";

export interface ApplicationState {
	user: UserState;
}

export interface Action extends ReduxAction {
	type: string;
	payload: {
		[key: string]: any;
	};
}
