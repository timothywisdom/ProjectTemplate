import { useDispatch } from "react-redux";
import { ActionCreatorsMapObject, bindActionCreators } from "redux";

const useActions = <A, M extends ActionCreatorsMapObject<A>>(actions: M) => ({
	...bindActionCreators(actions, useDispatch()),
});

export default useActions;
