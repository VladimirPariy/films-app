import {combineReducers} from "@reduxjs/toolkit";
import {filmsReducer} from "./Slices/FilmsSlice";
import {movieDetailsReducer} from "./Slices/MovieDetailsSlice";
import {watchlistReducer} from "./Slices/WatchlistSlice";

export const rootReducer = combineReducers({
	films: filmsReducer,
	movieDetails: movieDetailsReducer,
	watchlist: watchlistReducer
})