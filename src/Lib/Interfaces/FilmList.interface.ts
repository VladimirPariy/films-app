import {IFilm} from "./FilmDetails.interface";

export interface IFilmsListData {
	page: number;
	results: IFilmFromList[];
	total_pages: number;
	total_results: number;
}

export interface IFilmFromList extends IFilm {
	genre_ids: number[];
}