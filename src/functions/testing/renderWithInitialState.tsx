import configureStore from "redux-mock-store";
import { render } from "@testing-library/react";
import { initialState } from "../../store";
import { Provider } from "react-redux";

const renderWithInitialState = (component: JSX.Element, state?: any) => {
	const initialTestState = state
		? { ...initialState, ...state }
		: initialState;
	const store = configureStore()(initialTestState);
	return render(<Provider store={store}>{component}</Provider>);
};

export default renderWithInitialState;
