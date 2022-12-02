import React, { FC, MouseEvent } from "react";

import styles from "components/movie-details-layout/movie-details.module.scss";

import { useAppDispatch } from "store/store-types";
import {
  addInWatchlist,
  removeFromWatchlist,
} from "store/actions/watchlist-actions";

import { getTime } from "lib/utils/get-time";
import TmdbAPI from "lib/api/tmdb-api";
import { useHasInWatchlist } from "lib/hooks/use-has-in-watchlist";

import { AddInWatchlistBtn } from "components/ui/add-in-watchlist-btn/add-in-watchlist-btn";

interface Props {
  title: string;
  release_date: string;
  runtime: number | null;
  status: string;
  ID: number;
  imdb_id: string | null;
}

const MovieDetailsHeader: FC<Props> = (props) => {
  const { ID, imdb_id, status, title, runtime, release_date } = props;

  const dispatch = useAppDispatch();
  const hasInWatchlist = useHasInWatchlist(ID);

  const runTime = getTime(runtime);

  const watchlistClickHandler = async (e: MouseEvent, ID: number) => {
    e.preventDefault();
    if (imdb_id) {
      const movie = await TmdbAPI.findMovie(imdb_id);
      hasInWatchlist
        ? dispatch(removeFromWatchlist(ID))
        : dispatch(addInWatchlist(movie[0]));
    }
  };

  return (
    <div className={styles.headerPart}>
      <div className={styles.title}>{title}</div>
      <div>
        <div className={styles.subtitle}>
          <span className={styles.releaseDate}>{release_date.slice(0, 4)}</span>
          {runtime && <span className={styles.runtime}>{runTime}</span>}
          <div className={styles.filmStatus}>
            <span className={styles.statusTitle}>Status:</span>
            {status}
          </div>
        </div>
        <AddInWatchlistBtn
          className={styles.bookmark}
          clickHandler={watchlistClickHandler}
          ID={ID}
        >
          {hasInWatchlist ? (
            <span>
              <span>&#10003;</span>
              In Watchlist
            </span>
          ) : (
            <span>
              <span>+</span>
              Add to Watchlist
            </span>
          )}
        </AddInWatchlistBtn>
      </div>
    </div>
  );
};

export { MovieDetailsHeader };
