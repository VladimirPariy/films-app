import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IFilmFromList} from "../../Lib/Interfaces/FilmsList.interface";
import {RootState} from "../storeTypes";
import {IFoundMovie} from "../../Lib/Interfaces/FoundMovie.interface";


const initialState: IFilmFromList[] = []

const WatchlistSlice = createSlice({
	name: '@@bookmark',
	initialState,
	reducers: {
		addInWatchlist: (state, {payload}: PayloadAction<IFilmFromList | IFoundMovie | undefined>) => {
			if (payload) state.push(payload)
		},
		removeFromWatchlist: (state, {payload}: PayloadAction<number>) => {
			return state.filter(movie => movie.id !== payload)
		}
	}
})

export const watchlistReducer = WatchlistSlice.reducer;

export const {addInWatchlist, removeFromWatchlist} = WatchlistSlice.actions;

export const selectWatchlist = (state: RootState) => state.watchlist;

