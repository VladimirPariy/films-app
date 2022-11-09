import {IFilmData} from "./FilmData.interface";

export interface IData {
	page: number;
	results: IFilmData[];
	total_pages: number;
	total_results: number;
}