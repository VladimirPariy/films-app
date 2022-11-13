import {useDispatch as useRegularDispatch} from "react-redux";
import {Action, AnyAction} from "redux";

interface VoidDispatch<A extends Action = AnyAction> {
	<T extends A>(action: T): void;
}

export const useDispatchForCleanup = <A extends Action = AnyAction>(): VoidDispatch<A> => {
	const regularDispatch = useRegularDispatch();
	
	return (action: A) => {
		regularDispatch(action);
	};
};