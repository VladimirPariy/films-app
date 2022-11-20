export interface IFilm {
	poster_path: string | null;
	adult: boolean;
	overview: string | null;
	release_date: string;
	id: number;
	original_title: string;
	original_language: string;
	title: string;
	backdrop_path: string | null;
	popularity: number;
	vote_count: number;
	video: boolean;
	vote_average: number;
}


export interface ITrailerData {
	id: number;
	results: ITrailer[]
}


export interface ITrailer {
	iso_639_1: string;
	iso_3166_1: string;
	name: string;
	key: string;
	site: string;
	size: number;
	type: string;
	official: boolean;
	published_at: string;
	id: string;
}

export interface IFilmDetails extends IFilm {
	budget: number;
	homepage: string | null;
	imdb_id: string | null;
	revenue: number;
	runtime: number | null;
	status: string;
	tagline: string | null;
	genres: {
		id: number;
		name: string
	}[];
	production_companies: {
		name: string;
		id: number;
		logo_path: string | null;
		origin_country: string;
	}[];
	production_countries: {
		iso_3166_1: string;
		name: string;
	}[];
	spoken_languages: {
		iso_639_1: string;
		name: string;
	}[];
	trailer: ITrailerData;
}




