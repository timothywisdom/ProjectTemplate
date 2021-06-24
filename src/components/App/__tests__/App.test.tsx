import { render } from "@testing-library/react";
import App from "../App";

test("renders App", () => {
	const result = render(<App />);
	expect(result.container).toBeInTheDocument();
	expect(result.container.children.length > 0).toBe(true);
});
