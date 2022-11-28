import React, {FC, ReactNode} from "react";
import styles from "./TitleContainer.module.scss";

interface Props {
	children: ReactNode;
}

const Title: FC<Props> = (props) => {
	return (
		<div className={styles.filmsTitle}>
			{props.children}
		</div>
	);
};

export default Title;