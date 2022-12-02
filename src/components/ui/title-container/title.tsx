import React, { FC, ReactNode } from "react";
import styles from "components/ui/title-container/title-container.module.scss";

interface Props {
  children: ReactNode;
}

const Title: FC<Props> = ({ children }) => {
  return <div className={styles.filmsTitle}>{children}</div>;
};

export { Title };
