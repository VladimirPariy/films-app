import React, {FC} from "react";

import styles from "./FilmCard.module.scss";

interface Props {
	release_date: string;
	vote_average: number;
	title: string;
}

const FilmInfo: FC<Props> = (props) => {
	return (
		<>
			<div className={styles.extraInfoWrapper}>
				<div>{props.release_date ? props.release_date.slice(0, 4) : 'Release date not announced'}</div>
				<div>{props.vote_average}</div>
			</div>
			<div className={styles.filmTitle}>
				{props.title}
			</div>
		</>
	);
};

export default FilmInfo;