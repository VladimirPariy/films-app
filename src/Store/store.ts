import {configureStore} from "@reduxjs/toolkit";
import {filmsReducer} from "../Feature/FilmsList/FilmsSlice";

export const store = configureStore({
	reducer: {
		films: filmsReducer
	},
	devTools: true
})