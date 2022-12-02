import React, { FC, MouseEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiBookmarkFill, RiBookmarkLine } from "react-icons/ri";

import styles from "components/ui/film-card/film-card.module.scss";

import { UrlEnum } from "lib/enums/url.enum";
import { useHasInWatchlist } from "lib/hooks/use-has-in-watchlist";

import { AddInWatchlistBtn } from "components/ui/add-in-watchlist-btn/add-in-watchlist-btn";
import { FilmInfo } from "components/ui/film-card/components/film-info";

interface Props {
  ID: number;
  poster_path: string | null;
  release_date: string;
  vote_average: number;
  title: string;
  clickHandler: (e: MouseEvent, ID: number) => void;
}

const FilmCard: FC<Props> = (props) => {
  const { ID, title, release_date, clickHandler, vote_average, poster_path } =
    props;

  const hasInWatchlist = useHasInWatchlist(ID);
  const location = useLocation();

  return (
    <Link
      className={styles.filmCardContainer}
      to={location.pathname === "/watchlist" ? `${ID}` : `movie/${ID}`}
    >
      <AddInWatchlistBtn
        className={styles.bookmarkContainer}
        clickHandler={clickHandler}
        ID={ID}
      >
        {hasInWatchlist ? <RiBookmarkFill /> : <RiBookmarkLine />}
      </AddInWatchlistBtn>
      <div className={styles.imgContainer}>
        <img
          src={`${UrlEnum.imgURL}${poster_path}`}
          alt="Movie poster"
          loading="lazy"
        />
      </div>
      <FilmInfo
        release_date={release_date}
        vote_average={vote_average}
        title={title}
      />
    </Link>
  );
};

export { FilmCard };
