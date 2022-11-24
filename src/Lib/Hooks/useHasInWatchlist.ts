import {useAppSelector} from "../../Store/storeTypes";
import {selectWatchlist} from "../../Store/Slices/WatchlistSlice";

export const useHasInWatchlist = (ID:number):boolean => {
	const watchlist = useAppSelector(selectWatchlist);
	return !!watchlist.find(film => film.id === ID)
}