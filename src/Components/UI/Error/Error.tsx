import React, {FC} from "react";

import styles from './Error.module.scss';
import {ErrorPayload} from "../../../Store/storeTypes";

interface Props {
	error: ErrorPayload;
}

const Error: FC<Props> = (props) => {
	return (
		<div className={styles.error}>
			An error has occurred ({props.error.status_message}).
			<div> Try again later </div>
		</div>
	);
};

export default Error;