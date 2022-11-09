import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IFilmData} from "../../Lib/Interfaces/FilmData.interface";
import {IData} from "../../Lib/Interfaces/ResponseData.interface";
import getFilms from "../../Lib/Utils/fetchingFilms";
import {RootState} from "../../Store/storeTypes";


interface IAsyncThunkArgs {
	page: number;
	category?: string;
}

export const loadFilms = createAsyncThunk<IData, IAsyncThunkArgs>(
	'@@films/loadingFilms',
	async ({page, category = 'popular'}) => {
		return await getFilms(category, process.env.REACT_APP_API_KEY || '', page);
	}
)


interface IInitialState {
	status: "idle" | "loading" | "received" | "rejected";
	error: null | string;
	entities: IFilmData[];
	currentPage: number;
	totalPage: number;
}

const initialState: IInitialState = {
	status: "idle",
	error: null,
	entities: [],
	currentPage: 0,
	totalPage: 0
}

const FilmsSlice = createSlice({
	name: "@films",
	initialState,
	reducers: {
		clearState: (state) => {
			state.error = null;
			state.entities = [];
			state.currentPage = 0;
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
export const selectTotalPageCount = (state: RootState) => state.films.totalPage;
export const selectError = (state: RootState) => state.films.error;
export const selectCurrentPage = (state: RootState) => state.films.currentPage;