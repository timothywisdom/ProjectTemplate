import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "../../store";
import UserPanel from "../UserPanel";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import Routes from "../../scenes/Routes";
import Header from "../Header";

const reduxStore = configureStore();

const App = () => {
	return (
		<React.StrictMode data-testId="app-test-id">
			<Provider store={reduxStore}>
				<BrowserRouter>
					<Header />
					<UserPanel />
					<Switch>
						{Routes}
						<Route render={() => <Redirect to="/home" />} />
					</Switch>
				</BrowserRouter>
			</Provider>
		</React.StrictMode>
	);
};

export default App;
