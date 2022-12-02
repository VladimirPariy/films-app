import React, { FC } from "react";

import styles from "layout/content/content.module.scss";

import { AppRouter } from "components/app-router/app-router";

const Content: FC = () => {
  return (
    <section className={styles.contentWrapper}>
      <AppRouter />
    </section>
  );
};

export default Content;
