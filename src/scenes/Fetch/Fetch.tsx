import React from "react";
import { PaddedSceneContainer } from "../../components/SceneContainer/styles";
import DnDSpell from "../../components/DnDSpell";

const Fetch: React.FC = () => {
	return (
		<PaddedSceneContainer id="fetch-scene">
			This is the Fetch Scene.
			<DnDSpell />
		</PaddedSceneContainer>
	);
};

export default Fetch;
