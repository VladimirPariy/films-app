import {combineReducers} from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";
import {filmsReducer} from "./Slices/FilmsSlice";
import {movieDetailsReducer} from "./Slices/MovieDetailsSlice";
import {watchlistReducer} from "./Slices/WatchlistSlice";

export const rootReducer = combineReducers({
	films: filmsReducer,
	movieDetails: movieDetailsReducer,
	watchlist: watchlistReducer
})

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
	blacklist: ['films', 'movieDetails']
}

export const persistedReducer = persistReducer(persistConfig, rootReducer)