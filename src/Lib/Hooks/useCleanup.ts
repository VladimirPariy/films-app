import {useEffect} from "react";
import {ActionCreatorWithoutPayload} from "@reduxjs/toolkit";

import {useDispatchForCleanup} from "./useDispatchForCleanup";

export const useCleanup = (cleanup: ActionCreatorWithoutPayload<string>) => {
	const dispatchApp = useDispatchForCleanup();
	useEffect(() => {
		return () => dispatchApp(cleanup());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
}