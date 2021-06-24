import React, { useState, useEffect } from "react";
import { DungeonsAndDragonsSpell } from "../../store/dungeonsAndDragons/types";
import { getSpell } from "../../store/dungeonsAndDragons/DnDActionCreators";
import { SpellContainer } from "./styles";
import useActions from "../../hooks/useActions";

const DnDSpell: React.FC = () => {
	const [spell, setSpell] = useState<DungeonsAndDragonsSpell | undefined>(
		undefined
	);

	const actions = useActions({ getSpell });

	useEffect(() => {
		if (!spell) {
			actions.getSpell(setSpell);
		}
	}, []);

	return (
		<div id="DnDSpell">
			{spell ? (
				<SpellContainer>
					Here's a DnD Spell that was fetched asynchronously via a
					Redux API Action<pre>{JSON.stringify(spell, null, 4)}</pre>
				</SpellContainer>
			) : null}
		</div>
	);
};

export default DnDSpell;
