import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilmFromList } from "lib/interfaces/films-list.interface";
import { IFoundMovie } from "lib/interfaces/found-movie.interface";

const initialState: IFilmFromList[] = [];

const WatchlistSlice = createSlice({
  name: "@@bookmark",
  initialState,
  reducers: {
    addInWatchlist: (
      state,
      { payload }: PayloadAction<IFilmFromList | IFoundMovie | undefined>
    ) => {
      if (payload) state.push(payload);
    },
    removeFromWatchlist: (state, { payload }: PayloadAction<number>) => {
      return state.filter((movie) => movie.id !== payload);
    },
  },
});

export { WatchlistSlice };
