import { selectWatchlist } from "store/selectors/watchlist-selector";
import { useAppSelector } from "store/store-types";

export const useHasInWatchlist = (ID: number): boolean => {
  const watchlist = useAppSelector(selectWatchlist);
  return !!watchlist.find((film) => film.id === ID);
};
