import React, { FC, ReactNode } from "react";
import styles from "components/ui/form-wrapper/form-wrapper.module.scss";

interface Props {
  children: ReactNode;
}

const FormWrapper: FC<Props> = ({ children }) => {
  return <div className={styles.formWrapper}>{children}</div>;
};

export { FormWrapper };
