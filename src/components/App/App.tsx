import React from "react";
import logo from "./resources/logo.svg";
import "./resources/App.css";
import { Provider } from "react-redux";
import configureStore from "../../store";
import UserPanel from "../UserPanel";

const reduxStore = configureStore();

const App = () => {
	return (
		<React.StrictMode>
			<Provider store={reduxStore}>
				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
					</header>
					<span>This is your app</span>
					<UserPanel />
				</div>
			</Provider>
		</React.StrictMode>
	);
};

export default App;
