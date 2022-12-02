import React, { FC, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { routesURL } from "lib/enums/router.enum";
import { Container } from "components/ui/container/container";
import { Loader } from "components/ui/loader/loader";

const MovieDetailsPage = lazy(
  () => import("pages/movie-detail-page/movie-details-page")
);
const WatchlistPage = lazy(() => import("pages/watchlist-page/watchlist-page"));
const NotFoundPage = lazy(() => import("pages/not-found-page/not-found-page"));
const FilmsPage = lazy(() => import("pages/films-page/films-page"));
const RegistrationPage = lazy(
  () => import("pages/registration-page/registration-page")
);
const LoginPage = lazy(() => import("pages/login-page/login-page"));

const AppRouter: FC = () => {
  return (
    <Suspense
      fallback={
        <Container condition={true}>
          <Loader />
        </Container>
      }
    >
      <Routes>
        <Route path={routesURL.allFilms} element={<FilmsPage />} />
        <Route path={routesURL.movieDetails} element={<MovieDetailsPage />} />
        <Route path={routesURL.watchlist}>
          <Route path={routesURL.watchlist} element={<WatchlistPage />} />
          <Route
            path={routesURL.watchlistMovieDetails}
            element={<MovieDetailsPage />}
          />
        </Route>
        <Route path={routesURL.registration} element={<RegistrationPage />} />
        <Route path={routesURL.login} element={<LoginPage />} />
        <Route path={routesURL.notFound} element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export { AppRouter };
