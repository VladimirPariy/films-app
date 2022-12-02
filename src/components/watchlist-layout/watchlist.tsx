import React, { FC, MouseEvent, Suspense } from "react";

import { useAppDispatch, useAppSelector } from "store/store-types";
import { removeFromWatchlist } from "store/actions/watchlist-actions";
import { selectWatchlist } from "store/selectors/watchlist-selector";

import { FilmsGridContainer } from "components/ui/films-grid-container/films-grid-container";
import { FilmCard } from "components/ui/film-card/film-card";
import { Title } from "components/ui/title-container/title";
import { Loader } from "components/ui/loader/loader";
import { Container } from "components/ui/container/container";
import { EmptyList } from "components/ui/empty-list/empty-list";

const Watchlist: FC = () => {
  const watchlist = useAppSelector(selectWatchlist);
  const dispatch = useAppDispatch();

  const watchlistClickHandler = (e: MouseEvent, ID: number) => {
    e.preventDefault();
    dispatch(removeFromWatchlist(ID));
  };

  return (
    <div>
      <Title>Watchlist</Title>
      <Suspense
        fallback={
          <Container condition={true}>
            <Loader />
          </Container>
        }
      >
        {watchlist.length === 0 && <EmptyList />}
      </Suspense>
      <FilmsGridContainer>
        {watchlist.map((film) => (
          <FilmCard
            key={film.id}
            ID={film.id}
            title={film.title}
            poster_path={film.poster_path}
            release_date={film.release_date}
            vote_average={film.vote_average}
            clickHandler={watchlistClickHandler}
          />
        ))}
      </FilmsGridContainer>
    </div>
  );
};

export { Watchlist };
