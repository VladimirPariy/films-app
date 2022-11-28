import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {ErrorPayload, LoadingStatusType, RootState} from "../storeTypes";

import {IFilmFromList, IFilmsListData} from "../../Lib/Interfaces/FilmsList.interface";
import {filmsCategories} from "../../Lib/Enums/filmsCategories.enum";
import imdbAPI from "../../Lib/api/imdbAPI";
import {AxiosError} from "axios";


export const loadFilms = createAsyncThunk<IFilmsListData | undefined,
	{ currentPage: number },
	{ state: RootState, rejectValue: ErrorPayload }>(
	'@@films/loadingFilms',
	async ({currentPage}, thunkAPI) => {
		try {
			return await imdbAPI.getFilmsList(filmsCategories.popular, currentPage);
		} catch (e) {
			if (e instanceof AxiosError) return thunkAPI.rejectWithValue({
				status_message: JSON.parse(e.request.response).status_message,
				status: e.request.status
			})
		}
	},
	{
		condition: (_, {getState}) => {
			const {status} = getState().films;
			return status !== 'loading';
		}
	}
);


interface IInitialState {
	status: LoadingStatusType;
	error: null | ErrorPayload;
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
				if (action.payload) {
					//if api response contains duplicates
					// const payloadWithoutDuplicate = action.payload.results.filter(film => {
					// 	const duplicate = state.entities.find(ent => ent.id === film.id)
					// 	return film.id !== duplicate?.id
					// })
					
					state.entities = state.entities.concat(action.payload.results); //payloadWithoutDuplicate
					state.currentPage = action.payload.page;
					state.totalPage = action.payload.total_pages;
				}
			})
			.addCase(loadFilms.rejected, (state, action) => {
				state.error = action.payload || {status: 400, status_message: 'We received an unknown error'};
				state.status = "rejected";
			})
	}
})


export const filmsReducer = FilmsSlice.reducer;

export const {setCurrentPage} = FilmsSlice.actions;

export const selectAllFilms = (state: RootState) => state.films.entities;
export const selectIsLoading = (state: RootState) => state.films.status;
export const selectCurrentPage = (state: RootState) => state.films.currentPage;
export const selectTotalPageCount = (state: RootState) => state.films.totalPage;
export const selectError = (state: RootState) => state.films.error;
