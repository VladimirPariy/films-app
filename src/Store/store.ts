import {configureStore} from "@reduxjs/toolkit";
import {filmsReducer} from "./Slices/FilmsSlice";
import {movieDetailsReducer} from "./Slices/MovieDetailsSlice";
import {WatchlistReducer} from "./Slices/WatchlistSlice";

export const store = configureStore({
	reducer: {
		films: filmsReducer,
		movieDetails: movieDetailsReducer,
		watchlist: WatchlistReducer
	},
	devTools: true
})