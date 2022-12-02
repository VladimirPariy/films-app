import React, { FC } from "react";

import styles from "components/movie-details-layout/movie-details.module.scss";

import { UrlEnum } from "lib/enums/url.enum";
import { ITrailer } from "lib/interfaces/movie-details.interface";
import { getTrailer } from "lib/utils/get-trailer";

interface Props {
  poster_path: string | null;
  trailer: {
    results: ITrailer[];
  };
}

const PromotionalMovieDetails: FC<Props> = ({
  poster_path,
  trailer: { results },
}) => {
  const trailer = getTrailer(results);
  return (
    <div className={styles.promotionalPart}>
      {poster_path && (
        <img
          className={styles.poster}
          src={`${UrlEnum.imgURL}${poster_path}`}
          alt="poster"
          loading="lazy"
        />
      )}
      {trailer && (
        <iframe
          src={`${UrlEnum.trailerURL}${trailer.key}`}
          title="YouTube video player"
          frameBorder="0"
          security="SameSite=Strict"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={styles.trailer}
          loading="lazy"
        />
      )}
    </div>
  );
};

export { PromotionalMovieDetails };
