import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";
import {rootReducer} from "./rootReducer";

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
	blacklist: ['films', 'movieDetails']
}

export const persistedReducer = persistReducer(persistConfig, rootReducer)