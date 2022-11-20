import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {LoadingStatusType, RootState} from "../storeTypes";
import {IFilmDetails} from "../../Lib/Interfaces/FilmDetails.interface";
import imdbAPI from "../../Lib/api/imdbAPI";


export const loadFilmDetails = createAsyncThunk<IFilmDetails, { id: string }>(
	'@@details/loadingDetails',
	async ({id}) => {
		return await imdbAPI.getFilmDetails(id,);
	})

interface IInitialState {
	status: LoadingStatusType;
	error: null | string;
	entities: IFilmDetails;
}

const initialState: IInitialState = {
	status: "idle",
	error: null,
	entities: {} as IFilmDetails
}


const FilmDetailsSlice = createSlice({
	name: '@@details',
	initialState,
	reducers: {
		clearState: (state) => {
			state.error = null;
			state.status = "idle";
			state.entities = {} as IFilmDetails;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(loadFilmDetails.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(loadFilmDetails.fulfilled, (state, action) => {
				state.error = null;
				state.status = "received";
				state.entities = action.payload;
			})
			.addCase(loadFilmDetails.rejected, (state, action) => {
				state.error = action.error.message || 'We got some error';
				state.status = "rejected";
			})
	}
})

export const filmDetailsReducer = FilmDetailsSlice.reducer;

export const {clearState} = FilmDetailsSlice.actions;

export const selectDetails = (state: RootState) => state.filmDetails.entities
export const selectIsLoadingDetails = (state: RootState) => state.filmDetails.status
export const selectDetailsError = (state: RootState) => state.filmDetails.error