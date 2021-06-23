import { AnyAction, Dispatch, Middleware, MiddlewareAPI } from "redux";
import applicationFetchAsync from "../scripts/custom/fetch/applicationFetchAsync";
import { RequestOptions } from "../scripts/custom/fetch/fetchTypes";
import { Action, ApplicationState } from "../store/types";

const dispatchAllActions = (
	dispatch: Dispatch,
	actions: Action | Action[]
): void => {
	const allActions: Action[] = Array.isArray(actions) ? actions : [actions];
	for (const actionItem of allActions) {
		dispatch(actionItem);
	}
};

const handleApiAction = async (
	store: MiddlewareAPI<Dispatch<AnyAction>, ApplicationState>,
	action: Action
) => {
	const { dispatch, getState } = store;
	const {
		loadingActions,
		unloadingActions,
		successActions,
		errorActions,
		pageTrackEvent,
		...remainingPayload
	} = action.payload;
	const requestOptions = remainingPayload as RequestOptions;

	const storeState: ApplicationState = getState();
	const jwt = storeState.user.jwt;

	if (loadingActions) {
		dispatchAllActions(dispatch, loadingActions());
	}

	try {
		const response = await applicationFetchAsync(requestOptions, jwt);
		if (successActions) {
			dispatchAllActions(dispatch, successActions(response));
		}
	} catch (error) {
		console.log(
			`API Middleware ERROR on fetch to ${requestOptions.url}`,
			error
		);

		if (errorActions) {
			dispatchAllActions(dispatch, errorActions(error));
		}
	} finally {
		if (unloadingActions) {
			dispatchAllActions(dispatch, unloadingActions());
		}
	}
};

const apiMiddleware: Middleware<{}, ApplicationState> =
	(store) => (next) => (action) => {
		if (action.type === "API_REQUEST") {
			handleApiAction(store, action);
		}
		return next(action);
	};

export default apiMiddleware;
