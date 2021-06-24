const mockUseLocation = () => {
	jest.mock("react-router-dom", () => ({
		...jest.requireActual("react-router-dom"),
		useLocation: () => ({
			pathname: "localhost:3000/example/path",
		}),
	}));
};

export default mockUseLocation;
