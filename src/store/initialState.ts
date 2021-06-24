import { ApplicationState } from "./types";
import { initialState as userInitialState } from "./user";

const initialState: ApplicationState = {
	user: userInitialState,
};

export default initialState;
