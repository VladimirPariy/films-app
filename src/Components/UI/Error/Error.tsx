import React, {FC} from "react";

import styles from './Error.module.scss'

interface Props {
	error: string
}

const Error: FC<Props> = (props) => {
	return (
		<div className={styles.error}>
			An error has occurred ({props.error}).
			<div> Try again later </div>
		</div>
	);
};

export default Error;