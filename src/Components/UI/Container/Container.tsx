import React, {FC, ReactNode} from "react";
import styles from './Container.module.scss';

interface Props {
	condition: boolean;
	children: ReactNode;
}

const Container: FC<Props> = (props) => {
	return (
		<div className={props.condition ? styles.true : styles.false}>
			{props.children}
		</div>
	);
};

export default Container;