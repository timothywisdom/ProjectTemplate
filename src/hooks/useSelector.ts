import { shallowEqual, useSelector as useReduxSelector } from "react-redux";
import { ApplicationState } from "../store/types";

const useSelector = <TSelected = unknown>(
	selector: (state: ApplicationState) => TSelected
) => useReduxSelector(selector, shallowEqual);

export default useSelector;
