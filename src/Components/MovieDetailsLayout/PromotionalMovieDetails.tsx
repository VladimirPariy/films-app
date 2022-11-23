import React, {FC} from "react";

import styles from "./MovieDetails.module.scss";

import {UrlEnum} from "../../Lib/Enums/url.enum";
import {getTrailer} from "../../Lib/Utils/getTrailer";
import {ITrailerData} from "../../Lib/Interfaces/FilmDetails.interface";

interface Props {
	poster_path: string | null;
	trailer: ITrailerData;
}

const PromotionalMovieDetails: FC<Props> = (props) => {
	const trailer = getTrailer(props.trailer.results);
	return (
		<div className={styles.promotionalPart}>
			{props.poster_path &&
				<img className={styles.poster}
						 src={`${UrlEnum.imgURL}${props.poster_path}`}
						 alt="poster"/>
			}
			{trailer &&
				<iframe src={`${UrlEnum.trailerURL}${trailer.key}`}
								allowFullScreen
								title="video"
								className={styles.trailer}/>
			}
		</div>
	);
};

export default PromotionalMovieDetails;