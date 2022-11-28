import React, {FC} from "react";
import ClipLoader from "react-spinners/ClipLoader";

import styles from './Loader.module.scss';


const Loader: FC = () => {
	return (
		<div className={styles.loaderContainer}>
			<ClipLoader color={'#59678E'} size={40} className={styles.loader}/>
		</div>
	);
};

export default Loader;