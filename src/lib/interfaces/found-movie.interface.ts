import { IFilmFromList } from "lib/interfaces/films-list.interface";

export interface IFoundMovie extends IFilmFromList {
  media_type: string;
}

export interface IFoundMovieResults {
  movie_results: IFoundMovie[];
}
