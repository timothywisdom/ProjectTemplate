import React from "react";
import { useSelector } from "react-redux";
import { ApplicationState } from "../../store/types";

const UserPanel: React.FC = () => {
	const authenticateState = useSelector(
		(state: ApplicationState) => state.user.authenticatedState
	);
	return (
		<div id="user-panel">
			User Authentication Status is currently: {authenticateState}
		</div>
	);
};

export default UserPanel;
