import { screen } from "@testing-library/react";
import UserPanel from "../UserPanel";
import renderWithInitialState from "../../../functions/testing/renderWithInitialState";

test("renders UserPanel when Authenticated", () => {
	const state = {
		user: {
			authenticatedState: "Authenticated",
		},
	};

	renderWithInitialState(<UserPanel />, state);
	const divElement = document.querySelector("#user-panel");
	const textElement = screen.getAllByText(
		/User Authentication Status is currently: Authenticated/i
	)[0];
	expect(divElement).toBeInTheDocument();
	expect(textElement).toBeInTheDocument();
});

test("renders UserPanel when Unauthenticated", () => {
	const state = {
		user: {
			authenticatedState: "Unauthenticated",
		},
	};

	renderWithInitialState(<UserPanel />, state);
	const divElement = document.querySelector("#user-panel");
	const textElement = screen.getAllByText(
		/User Authentication Status is currently: Unauthenticated/i
	)[0];
	expect(divElement).toBeInTheDocument();
	expect(textElement).toBeInTheDocument();
});
