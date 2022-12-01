import React, {FC, ReactNode} from "react";
import styles from "./FormWrapper.module.scss";

interface Props {
	children:ReactNode
}

const FormWrapper: FC<Props> = (props) => {
	return (
		<div className={styles.formWrapper}>
			{props.children}
		</div>
	);
};

export default FormWrapper;