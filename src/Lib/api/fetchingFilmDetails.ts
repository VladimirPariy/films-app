import axios from "axios"
import {IFilmDetails} from "../Interfaces/FilmDetails.interface";
import {getVideos} from "./fetchingTrailer";

export const getFilmDetails = async (id: string, api_key: string) => {
	const {data} = await axios.get<IFilmDetails>(id, {
		params: {api_key},
		baseURL: 'https://api.themoviedb.org/3/movie/',
	});
	data.trailer = await getVideos(id, api_key);
	return data;
}