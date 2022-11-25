import React, {FC} from "react";

import styles from './EmptyList.module.scss'

interface Props {
}

const EmptyList: FC<Props> = (props) => {
	return (
		<div className={styles.emptyListContainer}>
			<div className={styles.title}>
				Your Watchlist is empty
			</div>
			<div className={styles.subtitle}>
				Add movies to your Watchlist to keep track of what you want to watch.
			</div>
		</div>
	);
};

export default EmptyList;