import { DungeonsAndDragonsSpell } from "./types";

export const getSpell = (
	setSpell: React.Dispatch<
		React.SetStateAction<DungeonsAndDragonsSpell | undefined>
	>
) => ({
	type: "API_REQUEST",
	payload: {
		url: "https://www.dnd5eapi.co/api/spells/acid-arrow",
		method: "GET",
		withCredentials: false,
		loadingActions: () => {
			console.log("Fetching D&D spell");
			return [];
		},
		successActions: (data: DungeonsAndDragonsSpell) => {
			console.log("D&D response", { data });
			setSpell(data);
			return [];
		},
		errorActions: (err: any) => {
			console.log("Failed to fetch D&D spell", { err });
			return [];
		},
		unloadingActions: () => {
			console.log("Fetched D&D spell");
			return [];
		},
	},
});
