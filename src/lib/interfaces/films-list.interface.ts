import { IMovie } from "lib/interfaces/movie-details.interface";

export interface IFilmsListData {
  page: number;
  results: IFilmFromList[];
  total_pages: number;
  total_results: number;
}

export interface IFilmFromList extends IMovie {
  genre_ids: number[];
}
