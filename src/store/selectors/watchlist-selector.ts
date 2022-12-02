import { RootState } from "store/store-types";

const selectWatchlist = (state: RootState) => state.watchlist;

export { selectWatchlist };
