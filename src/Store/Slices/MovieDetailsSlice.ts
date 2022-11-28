import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {ErrorPayload, LoadingStatusType, RootState} from "../storeTypes";

import {IMovieDetails} from "../../Lib/Interfaces/MovieDetails.interface";
import imdbAPI from "../../Lib/api/imdbAPI";
import {AxiosError} from "axios";


export const loadMovieDetails = createAsyncThunk<IMovieDetails | undefined,
	{ id: string },
	{ rejectValue: ErrorPayload }>(
	'@@details/loadingDetails',
	async ({id}, thunkAPI) => {
		try {
			const {data} = await imdbAPI.getMovieDetails(id);
			return data
		} catch (e) {
			if (e instanceof AxiosError) return thunkAPI.rejectWithValue({
				status_message: JSON.parse(e.request.response).status_message,
				status: e.request.status
			})
		}
	})

interface IInitialState {
	status: LoadingStatusType;
	error: ErrorPayload | null;
	entities: IMovieDetails;
}

const initialState: IInitialState = {
	status: "idle",
	error: null,
	entities: {} as IMovieDetails
}


const MovieDetailsSlice = createSlice({
	name: '@@details',
	initialState,
	reducers: {
		clearState: (state) => {
			state.error = null;
			state.status = "idle";
			state.entities = {} as IMovieDetails;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(loadMovieDetails.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(loadMovieDetails.fulfilled, (state, action) => {
				state.error = null;
				state.status = "received";
				if (action.payload) state.entities = action.payload;
			})
			.addCase(loadMovieDetails.rejected, (state, action) => {
				state.error = action.payload || {status: 400, status_message: 'We received an unknown error'};
				state.status = "rejected";
			})
	}
})

export const movieDetailsReducer = MovieDetailsSlice.reducer;

export const {clearState} = MovieDetailsSlice.actions;

export const selectDetails = (state: RootState) => state.movieDetails.entities;
export const selectIsLoadingDetails = (state: RootState) => state.movieDetails.status;
export const selectDetailsError = (state: RootState) => state.movieDetails.error;