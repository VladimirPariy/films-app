import React, {FC} from "react";

import styles from "./MovieDetails.module.scss";

import {UrlEnum} from "../../Lib/Enums/url.enum";
import {ITrailer} from "../../Lib/Interfaces/MovieDetails.interface";
import {getTrailer} from "../../Lib/Utils/getTrailer";

interface Props {
	poster_path: string | null;
	trailer: {
		results: ITrailer[];
	}
}

const PromotionalMovieDetails: FC<Props> = (props) => {
	const trailer = getTrailer(props.trailer.results);
	return (
		<div className={styles.promotionalPart}>
			{props.poster_path &&
				<img className={styles.poster}
						 src={`${UrlEnum.imgURL}${props.poster_path}`}
						 alt="poster"
						 loading="lazy"/>
			}
			{trailer &&
				<iframe src={`${UrlEnum.trailerURL}${trailer.key}`}
								title="YouTube video player"
								frameBorder="0"
								security='SameSite=Strict'
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
								className={styles.trailer}
								loading="lazy"/>
			}
		</div>
	);
};

export default PromotionalMovieDetails;