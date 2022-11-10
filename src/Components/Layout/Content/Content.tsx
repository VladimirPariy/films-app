import React, {FC} from "react";

import styles from './Content.module.scss';

import AppRouter from "../../AppRouter/AppRouter";

const Content: FC = () => {
	return (
		<section className={styles.contentWrapper}>
			<AppRouter/>
		</section>
	);
};

export default Content;