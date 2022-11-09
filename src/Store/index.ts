import {configureStore} from "@reduxjs/toolkit";
import {filmsReducer} from "../Feature/FetchedFilms/FilmsSlice";

export const store = configureStore({
	reducer: {
		films: filmsReducer
	},
	devTools: true,
	// middleware
})