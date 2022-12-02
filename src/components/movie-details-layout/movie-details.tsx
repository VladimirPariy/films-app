import React, { FC, Suspense, useEffect } from "react";
import { useParams } from "react-router";

import styles from "components/movie-details-layout/movie-details.module.scss";
import {
  selectDetails,
  selectDetailsError,
  selectIsLoadingDetails,
} from "store/selectors/movie-details-selectors";
import { clearState } from "store/actions/movie-details-actions";

import { useAppDispatch, useAppSelector } from "store/store-types";
import { loadMovieDetails } from "store/slices/movie-details-slice";

import { useCleanup } from "lib/hooks/use-cleanup";

import { MovieDetailsHeader } from "components/movie-details-layout/components/movie-details-header";
import { PromotionalMovieDetails } from "components/movie-details-layout/components/promotional-movie-details";
import { MovieDescription } from "components/movie-details-layout/components/movie-description";
import { ExtraMovieDetails } from "components/movie-details-layout/components/extra-movie-details";
import { Loader } from "components/ui/loader/loader";
import { Container } from "components/ui/container/container";
import { Error } from "components/ui/error/error";

const MovieDetails: FC = () => {
  const { id } = useParams();

  const isLoading = useAppSelector(selectIsLoadingDetails);
  const movieDetails = useAppSelector(selectDetails);
  const error = useAppSelector(selectDetailsError);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isLoading === "loading") return;
    if (id) dispatch(loadMovieDetails({ id }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, dispatch]);

  useCleanup(clearState);

  const {
    title,
    release_date,
    runtime,
    status,
    poster_path,
    videos,
    genres,
    overview,
    budget,
    homepage,
    production_companies,
    id: ID,
    imdb_id,
  } = movieDetails;
  return (
    <>
      {isLoading === "loading" && (
        <Container condition={Object.keys(movieDetails).length === 0}>
          <Loader />
        </Container>
      )}
      {error && (
        <Container condition={Object.keys(movieDetails).length === 0}>
          <Suspense fallback={<Loader />}>
            <Error error={error} />
          </Suspense>
        </Container>
      )}
      {Object.keys(movieDetails).length !== 0 && (
        <div className={styles.wrapper}>
          <MovieDetailsHeader
            title={title}
            release_date={release_date}
            runtime={runtime}
            status={status}
            ID={ID}
            imdb_id={imdb_id}
          />
          <PromotionalMovieDetails poster_path={poster_path} trailer={videos} />
          <MovieDescription genres={genres} overview={overview} />
          <ExtraMovieDetails
            budget={budget}
            homepage={homepage}
            production_companies={production_companies}
          />
        </div>
      )}
    </>
  );
};

export { MovieDetails };
