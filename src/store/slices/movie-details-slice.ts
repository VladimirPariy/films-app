import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { ErrorPayload, LoadingStatusType } from "store/store-types";

import { IMovieDetails } from "lib/interfaces/movie-details.interface";
import TmdbAPI from "lib/api/tmdb-api";

export const loadMovieDetails = createAsyncThunk<
  IMovieDetails | undefined,
  { id: string },
  { rejectValue: ErrorPayload }
>("@@details/loadingDetails", async ({ id }, thunkAPI) => {
  try {
    const { data } = await TmdbAPI.getMovieDetails(id);
    return data;
  } catch (e) {
    if (e instanceof AxiosError)
      return thunkAPI.rejectWithValue({
        status_message: JSON.parse(e.request.response).status_message,
        status: e.request.status,
      });
  }
});

interface IInitialState {
  status: LoadingStatusType;
  error: ErrorPayload | null;
  entities: IMovieDetails;
}

const initialState: IInitialState = {
  status: "idle",
  error: null,
  entities: {} as IMovieDetails,
};

const MovieDetailsSlice = createSlice({
  name: "@@details",
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
        state.error = action.payload || {
          status: 400,
          status_message: "We received an unknown error",
        };
        state.status = "rejected";
      });
  },
});

export { MovieDetailsSlice };
