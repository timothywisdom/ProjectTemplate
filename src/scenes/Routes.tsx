import { Route } from "react-router-dom";
import Fetch from "./Fetch";
import Home from "./Home";

const Routes = [
	<Route path="/home" key="/home">
		<Home />
	</Route>,
	<Route path="/fetch" key="/fetch">
		<Fetch />
	</Route>,
];

export default Routes;
