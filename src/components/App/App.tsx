import React from "react";
// import "./resources/App.css";
import { Provider } from "react-redux";
import configureStore from "../../store";
import UserPanel from "../UserPanel";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Routes from "../../scenes/Routes";
import Header from "../Header";

const reduxStore = configureStore();

const App = () => {
	return (
		<React.StrictMode>
			<Provider store={reduxStore}>
				<Router>
					<div className="App">
						<Header />
						<UserPanel />
						<Switch>{Routes}</Switch>
					</div>
				</Router>
			</Provider>
		</React.StrictMode>
	);
};

export default App;
