import React, { FC, useState } from "react";

import styles from "app.module.scss";

import Sidebar from "layout/sidebar/sidebar";
import Content from "layout/content/content";

const App: FC = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);

  return (
    <main
      className={styles.wrapper}
      onClick={() => setIsOpenSidebar(false)}
      onTouchStart={() => setIsOpenSidebar(false)}
    >
      <Sidebar
        isOpenSidebar={isOpenSidebar}
        setIsOpenSidebar={setIsOpenSidebar}
      />
      <Content />
    </main>
  );
};

export default App;
