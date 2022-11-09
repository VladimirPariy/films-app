import axios from "axios";
import {IData} from "../Interfaces/ResponseData.interface";


type FetchingFilmsType = (category: string, apiKey: string, page: number) => Promise<IData>


const getFilms: FetchingFilmsType = async (category: string, api_key: string, page: number) => {
	const {data} = await axios.get<IData>(category, {
		params: {api_key, page},
		baseURL: 'https://api.themoviedb.org/3/movie/',
	});
	return data;
}

export default getFilms;