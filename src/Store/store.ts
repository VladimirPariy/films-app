import {configureStore} from "@reduxjs/toolkit";
import {filmsReducer} from "./Slices/FilmsSlice";

export const store = configureStore({
	reducer: {
		films: filmsReducer
	},
	devTools: true
})