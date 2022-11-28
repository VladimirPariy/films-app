export interface IMovie {
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


export interface ITrailer {
	id: string;
	iso_639_1: string;
	iso_3166_1: string;
	key: string;
	name: string;
	official: boolean;
	published_at: string;
	site: string;
	size: number;
	type: string;
}

export interface IProductionCompanies {
	name: string;
	id: number;
	logo_path: string | null;
	origin_country: string;
}

interface IProductionCountries {
	iso_3166_1: string;
	name: string;
}

export interface IGenres {
	id: number;
	name: string;
}

interface ISpokenLanguages {
	iso_639_1: string;
	name: string;
}

export interface IMovieDetails extends IMovie {
	budget: number;
	homepage: string | null;
	imdb_id: string | null;
	revenue: number;
	runtime: number | null;
	status: string;
	tagline: string | null;
	genres: IGenres[];
	production_companies: IProductionCompanies[];
	production_countries: IProductionCountries[];
	spoken_languages: ISpokenLanguages[];
	videos: {
		results: ITrailer[];
	}
}




