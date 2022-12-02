import React, { FC } from "react";
import styles from "components/ui/submit-btn/submit-btn.module.scss";

interface Props {
  btnText: string;
}

const SubmitBtn: FC<Props> = ({ btnText }) => {
  return <input type="submit" value={btnText} className={styles.btn} />;
};

export { SubmitBtn };
