import { applyMiddleware, createStore, StoreEnhancer } from "redux";
// import monitorReducerEnhancer from "../enhancers/monitorReducerEnhancer";
import apiMiddleware from "../middleware/apiMiddleware";
import loggerMiddleware from "../middleware/loggerMiddleware";
import rootReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const configureStore = () => {
	const middlewares = [loggerMiddleware, apiMiddleware];
	const middlewareEnhancer = applyMiddleware(...middlewares);

	const enhancers: Array<StoreEnhancer> = [middlewareEnhancer];
	const composedEnhancers: StoreEnhancer<unknown, {}> = composeWithDevTools(
		...enhancers
	);

	const store = createStore(rootReducer, undefined, composedEnhancers);
	return store;
};

export default configureStore;
