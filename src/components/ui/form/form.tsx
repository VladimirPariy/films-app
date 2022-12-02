import React, { FC, FormEvent, ReactNode } from "react";
import styles from "components/ui/form/form.module.scss";

interface Props {
  children: ReactNode;
  submitHandler: (e: FormEvent<HTMLFormElement>) => void;
}

const Form: FC<Props> = ({ children, submitHandler }) => {
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      {children}
    </form>
  );
};

export { Form };
