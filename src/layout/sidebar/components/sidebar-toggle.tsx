import React, { Dispatch, FC } from "react";
import { AiOutlineLeft } from "react-icons/ai";

import styles from "layout/sidebar/sidebar.module.scss";

import { getClassListByCondition } from "lib/utils/get-class-by-condition";

interface Props {
  isOpenSidebar: boolean;
  setIsOpenSidebar: Dispatch<React.SetStateAction<boolean>>;
}

const SidebarToggle: FC<Props> = ({ isOpenSidebar, setIsOpenSidebar }) => {
  const sidebarToggling = getClassListByCondition(
    styles,
    "arrowForOpeningSidebar",
    "arrowForClosingSidebar",
    !isOpenSidebar
  );

  const toggleSidebarHandler = (): void => {
    setIsOpenSidebar((prev) => !prev);
  };
  return (
    <section className={styles.toggleContainer}>
      <article className={sidebarToggling} onClick={toggleSidebarHandler}>
        <AiOutlineLeft />
      </article>
    </section>
  );
};

export { SidebarToggle };
