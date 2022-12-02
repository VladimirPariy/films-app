import React, { FC, ReactNode } from "react";
import styles from "components/ui/container/container.module.scss";

interface Props {
  condition: boolean;
  children: ReactNode;
}

const Container: FC<Props> = ({ children, condition }) => {
  return (
    <div className={condition ? styles.true : styles.false}>{children}</div>
  );
};

export { Container };
