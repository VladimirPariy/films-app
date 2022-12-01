import React, {FC, FormEvent, ReactNode} from "react";
import styles from "./Form.module.scss";

interface Props {
	children:ReactNode;
	submitHandler:(e:FormEvent<HTMLFormElement>) => void
}

const Form: FC<Props> = (props) => {
	
	return (
		<form className={styles.form} onSubmit={props.submitHandler}>
			{props.children}
		</form>
	);
};

export default Form;