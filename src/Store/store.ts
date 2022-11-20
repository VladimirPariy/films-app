import {configureStore} from "@reduxjs/toolkit";
import {filmsReducer} from "./Slices/FilmsSlice";
import {filmDetailsReducer} from "./Slices/FilmDetailsSlice";

export const store = configureStore({
	reducer: {
		films: filmsReducer,
		filmDetails: filmDetailsReducer,
	},
	devTools: true
})