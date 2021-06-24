import renderWithInitialState from "../../../functions/testing/renderWithInitialState";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import mockUseLocation from "../../../functions/testing/mockUseLocation";

mockUseLocation();

test("renders Header", () => {
	const state = {
		user: {
			authenticatedState: "Authenticated",
		},
	};

	const result = renderWithInitialState(
		<BrowserRouter>
			<Header />
		</BrowserRouter>,
		state
	);
	expect(result.container).toBeInTheDocument();
	expect(result.container.children.length > 0).toBe(true);

	const linksInHeader = result.container.querySelectorAll("a");
	expect(linksInHeader.length > 0).toBe(true);
});
