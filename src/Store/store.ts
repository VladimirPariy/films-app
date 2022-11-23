import {configureStore} from "@reduxjs/toolkit";
import {filmsReducer} from "./Slices/FilmsSlice";
import {filmDetailsReducer} from "./Slices/MovieDetailsSlice";
import {WatchlistReducer} from "./Slices/WatchlistSlice";

export const store = configureStore({
	reducer: {
		films: filmsReducer,
		filmDetails: filmDetailsReducer,
		watchlist: WatchlistReducer
	},
	devTools: true
})