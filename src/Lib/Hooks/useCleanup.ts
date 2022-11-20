import {ActionCreatorWithoutPayload} from "@reduxjs/toolkit";
import {useEffect} from "react";
import {useDispatchForCleanup} from "./useDispatchForCleanup";

export const useCleanup = (cleanup: ActionCreatorWithoutPayload<string>) => {
	const dispatchApp = useDispatchForCleanup()
	useEffect(() => {
		return () => dispatchApp(cleanup())
	}, [])
}