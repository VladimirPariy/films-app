import { RootState } from "store/store-types";

export const selectDetails = (state: RootState) => state.movieDetails.entities;
export const selectIsLoadingDetails = (state: RootState) =>
  state.movieDetails.status;
export const selectDetailsError = (state: RootState) =>
  state.movieDetails.error;
