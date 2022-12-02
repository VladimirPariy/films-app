import { IFilmFromList } from "lib/interfaces/films-list.interface";
import { ErrorPayload, LoadingStatusType } from "store/store-types";
import { RootState } from "store/store-types";

const selectAllFilms = (state: RootState): IFilmFromList[] =>
  state.films.entities;
const selectIsLoading = (state: RootState): LoadingStatusType =>
  state.films.status;
const selectCurrentPage = (state: RootState): number => state.films.currentPage;
const selectTotalPageCount = (state: RootState): number =>
  state.films.totalPage;
const selectError = (state: RootState): ErrorPayload | null =>
  state.films.error;

export {
  selectAllFilms,
  selectIsLoading,
  selectError,
  selectTotalPageCount,
  selectCurrentPage,
};
