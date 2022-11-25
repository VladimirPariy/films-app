import React, {FC, ReactNode} from "react";

import styles from './FilmsGridContainer.module.scss';

interface Props {
	children: ReactNode;
}

const FilmsGridContainer: FC<Props> = (props) => {
	return (
		<>
			<div className={styles.filmsList}>
				{props.children}
			</div>
		</>
	);
};

export default FilmsGridContainer;