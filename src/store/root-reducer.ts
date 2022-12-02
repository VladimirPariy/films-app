import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import { filmsReducer } from "store/reducers/films-reducer";
import { movieDetailsReducer } from "store/reducers/movie-details-reducer";
import { watchlistReducer } from "store/reducers/watchlist-reducer";

const rootReducer = combineReducers({
  films: filmsReducer,
  movieDetails: movieDetailsReducer,
  watchlist: watchlistReducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["films", "movieDetails"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export { persistedReducer };
