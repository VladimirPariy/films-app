import React, {FC} from "react";
import styles from "./SubmitBtn.module.scss";

interface Props {
	btnText: string
}

const SubmitBtn: FC<Props> = (props) => {
	return (
		<input type="submit" value={props.btnText} className={styles.btn}/>
	);
};

export default SubmitBtn;