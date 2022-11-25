import axios from "axios";

import {IMovieDetails, ITrailerData} from "../Interfaces/MovieDetails.interface";
import {IFilmsListData} from "../Interfaces/FilmsList.interface";
import {IFoundMovieResults} from "../Interfaces/FoundMovie.interface";
import {UrlEnum} from "../Enums/url.enum";


const API_KEY = process.env.REACT_APP_API_KEY || ''

class ImdbAPI {
	async getFilmsList(category: string, page: number): Promise<IFilmsListData> {
		const {data} = await axios.get<IFilmsListData>(category, {
			params: {api_key: API_KEY, page},
			baseURL: UrlEnum.BASE_MOVIE_URL,
		});
		return data;
	}
	
	async findMovie(id: string) {
		const {data: {movie_results}} = await axios.get<IFoundMovieResults>(id, {
			params: {api_key: API_KEY, external_source: 'imdb_id'},
			baseURL: UrlEnum.findURL
		})
		return movie_results
	}
	
	async getMovieDetails(id: string): Promise<IMovieDetails> {
		const {data} = await axios.get<IMovieDetails>(id, {
			params: {api_key: API_KEY},
			baseURL: UrlEnum.BASE_MOVIE_URL,
		});
		data.trailer = await this.getVideos(id);
		return data;
	}
	
	async getVideos(id: string): Promise<ITrailerData> {
		const {data} = await axios.get<ITrailerData>(`/${id}/videos`, {
			params: {api_key: API_KEY},
			baseURL: UrlEnum.BASE_MOVIE_URL,
		});
		return data
	}
}

export default new ImdbAPI();