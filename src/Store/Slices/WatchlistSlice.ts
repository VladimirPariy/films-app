import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IFilmFromList} from "../../Lib/Interfaces/FilmList.interface";
import {RootState} from "../storeTypes";


const initialState: IFilmFromList[] = []

const WatchlistSlice = createSlice({
	name: '@@bookmark',
	initialState,
	reducers: {
		addInBookmark: (state, {payload}: PayloadAction<IFilmFromList | undefined>) => {
			if (payload) state.push(payload)
		},
		removeFromBookmark: (state, {payload}: PayloadAction<number>) => {
			return state.filter(movie => movie.id !== payload)
		}
	}
})

export const WatchlistReducer = WatchlistSlice.reducer;

export const {addInBookmark, removeFromBookmark} = WatchlistSlice.actions;

export const selectWatchlist = (state: RootState) => state.watchlist;

