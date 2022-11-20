import axios from "axios";
import {IFilmsListData} from "../Interfaces/FilmList.interface";


type FetchingFilmsType = (category: string, apiKey: string, page: number) => Promise<IFilmsListData>


const getFilms: FetchingFilmsType = async (category: string, api_key: string, page: number) => {
	const {data} = await axios.get<IFilmsListData>(category, {
		params: {api_key, page},
		baseURL: 'https://api.themoviedb.org/3/movie/',
	});
	return data;
}

export default getFilms;