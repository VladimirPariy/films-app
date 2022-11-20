import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {LoadingStatusType, RootState} from "../storeTypes";

import {IFilmFromList, IFilmsListData} from "../../Lib/Interfaces/FilmList.interface";
import getFilms from "../../Lib/api/fetchingFilms";
import {filmsCategories} from "../../Lib/Enums/filmCategories.enum";


export const loadFilms = createAsyncThunk<IFilmsListData, { currentPage: number }>(
	'@@films/loadingFilms',
	async ({currentPage}) => {
		return await getFilms(filmsCategories.popular, process.env.REACT_APP_API_KEY || '', currentPage);
	}
)


interface IInitialState {
	status: LoadingStatusType;
	error: null | string;
	entities: IFilmFromList[];
	currentPage: number;
	totalPage: number;
}

const initialState: IInitialState = {
	status: "idle",
	error: null,
	entities: [],
	currentPage: 1,
	totalPage: 0
}

const FilmsSlice = createSlice({
	name: "@@films",
	initialState,
	reducers: {
		clearState: (state) => {
			state.error = null;
			state.status = "idle";
			state.entities = [];
			state.currentPage = 1;
			state.totalPage = 0;
		},
		setCurrentPage: (state) => {
			state.currentPage += 1;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(loadFilms.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(loadFilms.fulfilled, (state, action) => {
				state.error = null;
				state.status = "received";
				state.entities = state.entities.concat(action.payload.results);
				state.currentPage = action.payload.page;
				state.totalPage = action.payload.total_pages;
			})
			.addCase(loadFilms.rejected, (state, action) => {
				state.error = action.error.message || 'We got some error';
				state.status = "rejected";
			})
	}
})


export const filmsReducer = FilmsSlice.reducer;

export const {clearState, setCurrentPage} = FilmsSlice.actions;

export const selectAllFilms = (state: RootState) => state.films.entities;
export const selectIsLoading = (state: RootState) => state.films.status;
export const selectCurrentPage = (state: RootState) => state.films.currentPage;
export const selectTotalPageCount = (state: RootState) => state.films.totalPage;
export const selectError = (state: RootState) => state.films.error;
