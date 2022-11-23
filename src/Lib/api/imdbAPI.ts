import axios from "axios";

import {IFilmDetails, ITrailerData} from "../Interfaces/MovieDetails.interface";
import {IFilmsListData} from "../Interfaces/FilmList.interface";
import {UrlEnum} from "../Enums/url.enum";


const API_KEY = process.env.REACT_APP_API_KEY || ''

class ImdbAPI {
	async getFilmsList(category: string, page: number) {
		const {data} = await axios.get<IFilmsListData>(category, {
			params: {api_key: API_KEY, page},
			baseURL: UrlEnum.BASE_URL,
		});
		return data;
	}
	
	async getFilmDetails(id: string) {
		const {data} = await axios.get<IFilmDetails>(id, {
			params: {api_key: API_KEY},
			baseURL: UrlEnum.BASE_URL,
		});
		data.trailer = await this.getVideos(id);
		return data;
	}
	
	async getVideos(id: string) {
		const {data} = await axios.get<ITrailerData>(`/${id}/videos`, {
			params: {api_key: API_KEY},
			baseURL: UrlEnum.BASE_URL,
		});
		return data
	}
}

export default new ImdbAPI();