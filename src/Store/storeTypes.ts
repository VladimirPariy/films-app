import {store} from "./store";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export type LoadingStatusType = "idle" | "loading" | "received" | "rejected";

export interface ErrorPayload {
	status_message: string
}