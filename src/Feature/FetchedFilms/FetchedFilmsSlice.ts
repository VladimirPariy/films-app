import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

import {IFilmData} from "../../Lib/Interfaces/FilmData.interface";
import {IData} from '../../Lib/Interfaces/ResponseData.interface'


interface asyncThunkArgs {
	category: string;
	api_key: string;
	page: number;
}

export const loadFilms = createAsyncThunk<IData, asyncThunkArgs>(
	'@@films/loadingFilms',
	async ({category, api_key, page}) => {
		const res = await axios.get<IData>(category, {
			params: {api_key, page},
			baseURL: 'https://api.themoviedb.org/3/movie/',
		})
		return res.data
	}
)

interface IInitialState {
	status: string;
	error: null | string;
	entities: IFilmData[];
	totalPage: number;
	currentPage: number;
}

const initialState: IInitialState = {
	status: "idle",
	error: null,
	entities: [],
	totalPage: 0,
	currentPage: 0
}

const FetchedFilmsSlice = createSlice({
	name: "@films",
	initialState,
	reducers: {},
	extraReducers: {}
})