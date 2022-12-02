import React, { FC } from "react";

import styles from "components/movie-details-layout/movie-details.module.scss";

import { IGenres } from "lib/interfaces/movie-details.interface";

interface Props {
  genres: IGenres[];
  overview: string | null;
}

const MovieDescription: FC<Props> = ({ genres, overview }) => {
  return (
    <>
      <div className={styles.genresContainer}>
        {genres.map((genre) => (
          <span className={styles.genreName} key={genre.id}>
            {genre.name}
          </span>
        ))}
      </div>
      {overview && <div className={styles.description}>{overview}</div>}
    </>
  );
};

export { MovieDescription };
