import React from "react";
import { useSelector } from "react-redux";
import { ApplicationState } from "../../store/types";

const UserPanel: React.FC = () => {
	const authenticateState = useSelector(
		(state: ApplicationState) => state.user.authenticatedState
	);
	return <div>User is {authenticateState}</div>;
};

export default UserPanel;
