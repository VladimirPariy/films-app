import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { ErrorPayload, LoadingStatusType, RootState } from "store/store-types";

import {
  IFilmFromList,
  IFilmsListData,
} from "lib/interfaces/films-list.interface";
import { filmsCategories } from "lib/enums/films-categories.enum";
import TmdbAPI from "lib/api/tmdb-api";

export const loadFilms = createAsyncThunk<
  IFilmsListData | undefined,
  { currentPage: number },
  { state: RootState; rejectValue: ErrorPayload }
>(
  "@@films/loadingFilms",
  async ({ currentPage }, thunkAPI) => {
    try {
      return await TmdbAPI.getFilmsList(filmsCategories.popular, currentPage);
    } catch (e) {
      if (e instanceof AxiosError)
        return thunkAPI.rejectWithValue({
          status_message: JSON.parse(e.request.response).status_message,
          status: e.request.status,
        });
    }
  },
  {
    condition: (_, { getState }) => {
      const { status } = getState().films;
      return status !== "loading";
    },
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
  totalPage: 0,
};

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
        state.error = action.payload || {
          status: 400,
          status_message: "We received an unknown error",
        };
        state.status = "rejected";
      });
  },
});

export { FilmsSlice };
