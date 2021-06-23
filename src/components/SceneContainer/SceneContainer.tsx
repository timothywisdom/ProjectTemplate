import React from "react";
import { PaddedSceneContainer } from "./styles";

const SceneContainer: React.FC = (props) => {
	return <PaddedSceneContainer>{props.children}</PaddedSceneContainer>;
};

export default SceneContainer;
