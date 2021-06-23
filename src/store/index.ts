import { applyMiddleware, createStore, compose, StoreEnhancer } from "redux";
import monitorReducerEnhancer from "../enhancers/monitorReducerEnhancer";
import apiMiddleware from "../middleware/apiMiddleware";
import loggerMiddleware from "../middleware/loggerMiddleware";
import rootReducer from "./reducer";

const configureStore = () => {
	const middlewares = [loggerMiddleware, apiMiddleware];
	const middlewareEnhancer = applyMiddleware(...middlewares);

	const enhancers = [middlewareEnhancer, monitorReducerEnhancer];
	const composedEnhancers: StoreEnhancer<unknown, {}> = compose(...enhancers);

	const store = createStore(rootReducer, undefined, composedEnhancers);
	return store;
};

export default configureStore;
