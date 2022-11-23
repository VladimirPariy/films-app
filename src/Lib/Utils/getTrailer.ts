import {ITrailer} from "../Interfaces/MovieDetails.interface";

export const getTrailer = (trailers: ITrailer[]): ITrailer | undefined => {
	return trailers.find(trailer => {
		return trailer.type === 'Trailer' && trailer.official;
	})
};
