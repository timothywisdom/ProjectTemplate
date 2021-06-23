import { Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";

const Routes = [
	<Route path="/home" key="/home">
		<Home />
	</Route>,
	<Route path="/about" key="/about">
		<About />
	</Route>,
];

export default Routes;
