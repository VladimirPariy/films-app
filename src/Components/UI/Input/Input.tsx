import React, {ChangeEvent, FC} from "react";

import styles from "./Input.module.scss";

interface Props {
	inputID: string;
	inputType: string;
	value: string;
	labelText: string;
	changeHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<Props> = (props) => {
	return (
		<>
			<label htmlFor={props.inputID} className={styles.label}>
				{props.labelText}
			</label>
			<input type={props.inputType}
						 id={props.inputID}
						 value={props.value}
						 onChange={props.changeHandler}
						 className={styles.input}/>
		</>
	);
};

export default Input;