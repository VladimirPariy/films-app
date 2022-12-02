import React, { FC } from "react";

import styles from "components/ui/film-card/film-card.module.scss";

interface Props {
  release_date: string;
  vote_average: number;
  title: string;
}

const FilmInfo: FC<Props> = ({ release_date, title, vote_average }) => {
  return (
    <>
      <div className={styles.extraInfoWrapper}>
        <div>
          {release_date
            ? release_date.slice(0, 4)
            : "Release date not announced"}
        </div>
        <div>{vote_average}</div>
      </div>
      <div className={styles.filmTitle}>{title}</div>
    </>
  );
};

export { FilmInfo };
