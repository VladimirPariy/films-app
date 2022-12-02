import React, { FC, MouseEvent, Suspense, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "store/store-types";
import { loadFilms } from "store/slices/films-slice";
import {
  selectAllFilms,
  selectCurrentPage,
  selectError,
  selectIsLoading,
} from "store/selectors/films-selectors";
import { selectWatchlist } from "store/selectors/watchlist-selector";
import {
  addInWatchlist,
  removeFromWatchlist,
} from "store/actions/watchlist-actions";

import { Loader } from "components/ui/loader/loader";
import { Container } from "components/ui/container/container";
import { FilmsGridContainer } from "components/ui/films-grid-container/films-grid-container";
import { FilmCard } from "components/ui/film-card/film-card";
import { Title } from "components/ui/title-container/title";
import { Error } from "components/ui/error/error";

const AllFilms: FC = () => {
  const films = useAppSelector(selectAllFilms);
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);
  const currentPage = useAppSelector(selectCurrentPage);
  const watchlist = useAppSelector(selectWatchlist);

  const dispatch = useAppDispatch();

  const countFilmsPerPage = 20;

  useEffect(() => {
    if (isLoading === "loading") return;
    if (
      films.length === 0 ||
      films.length !== currentPage * countFilmsPerPage
    ) {
      dispatch(loadFilms({ currentPage }));
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, dispatch]);

  const watchlistClickHandler = (e: MouseEvent, ID: number) => {
    e.preventDefault();
    const hasInWatchlist = !!watchlist.find((film) => film.id === ID);
    hasInWatchlist
      ? dispatch(removeFromWatchlist(ID))
      : dispatch(addInWatchlist(films.find((movie) => movie.id === ID)));
  };

  return (
    <>
      {error && (
        <Container condition={films.length === 0}>
          <Suspense fallback={<Loader />}>
            <Error error={error} />
          </Suspense>
        </Container>
      )}
      {films.length > 0 && (
        <>
          <Title>Most popular</Title>
          <FilmsGridContainer>
            {films.map((movie) => (
              <FilmCard
                key={movie.id}
                ID={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
                release_date={movie.release_date}
                vote_average={movie.vote_average}
                clickHandler={watchlistClickHandler}
              />
            ))}
          </FilmsGridContainer>
        </>
      )}
      {isLoading === "loading" && (
        <Container condition={films.length === 0}>
          <Loader />
        </Container>
      )}
    </>
  );
};

export { AllFilms };
