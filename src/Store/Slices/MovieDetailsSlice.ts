import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {LoadingStatusType, RootState} from "../storeTypes";

import {IMovieDetails} from "../../Lib/Interfaces/MovieDetails.interface";
import imdbAPI from "../../Lib/api/imdbAPI";


export const loadMovieDetails = createAsyncThunk<IMovieDetails, { id: string }>(
	'@@details/loadingDetails',
	async ({id}) => {
		return await imdbAPI.getMovieDetails(id,);
	})

interface IInitialState {
	status: LoadingStatusType;
	error: null | string;
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
				state.entities = action.payload;
			})
			.addCase(loadMovieDetails.rejected, (state, action) => {
				state.error = action.error.message || 'We got some error';
				state.status = "rejected";
			})
	}
})

export const movieDetailsReducer = MovieDetailsSlice.reducer;

export const {clearState} = MovieDetailsSlice.actions;

export const selectDetails = (state: RootState) => state.movieDetails.entities
export const selectIsLoadingDetails = (state: RootState) => state.movieDetails.status
export const selectDetailsError = (state: RootState) => state.movieDetails.error