import React, { FC, ReactNode } from "react";

import styles from "components/ui/films-grid-container/films-grid-container.module.scss";

interface Props {
  children: ReactNode;
}

const FilmsGridContainer: FC<Props> = ({ children }) => {
  return (
    <>
      <div className={styles.filmsList}>{children}</div>
    </>
  );
};

export { FilmsGridContainer };
