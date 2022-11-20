import axios from "axios";
import {ITrailerData} from "../Interfaces/FilmDetails.interface";

export const getVideos = async (id: string, api_key: string) => {
	
	const {data} = await axios.get<ITrailerData>(`/${id}/videos`, {
		params: {api_key},
		baseURL: 'https://api.themoviedb.org/3/movie/',
	});
	return data
}

//https://www.youtube.com/embed/6JnN1DmbqoU
//https://api.themoviedb.org/3/movie/{id}/videos