import React, { FC } from "react";
import { GiFilmSpool } from "react-icons/gi";

import styles from "layout/sidebar/sidebar.module.scss";
import { getClassListByCondition } from "lib/utils/get-class-by-condition";

interface Props {
  isOpenSidebar: boolean;
}

const SidebarLogo: FC<Props> = ({ isOpenSidebar }) => {
  const sidebarLogo = getClassListByCondition(
    styles,
    "logo",
    "logoDuringSidebarToggling",
    !isOpenSidebar
  );
  return (
    <section className={sidebarLogo}>
      <GiFilmSpool />
    </section>
  );
};

export { SidebarLogo };
