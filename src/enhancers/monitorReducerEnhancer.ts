import { Action, ApplicationState } from "../store/types";
import { Reducer, StoreCreator, StoreEnhancer } from "redux";

const round = (number: number) => Math.round(number * 100) / 100;

const monitorReducerEnhancer =
	(createStore: StoreCreator) =>
	(
		reducer: Reducer<ApplicationState, Action>,
		initialState: ApplicationState,
		enhancer: StoreEnhancer
	) => {
		const monitoredReducer: Reducer<ApplicationState, Action> = (
			state: ApplicationState | undefined,
			action: Action
		) => {
			const start = performance.now();
			const newState = reducer(state, action);
			const end = performance.now();
			const diff = round(end - start);

			console.log("reducer process time:", diff);

			return newState;
		};

		return createStore(monitoredReducer, initialState, enhancer);
	};

export default monitorReducerEnhancer;
