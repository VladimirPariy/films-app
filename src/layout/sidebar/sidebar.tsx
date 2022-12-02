import React, { Dispatch, FC } from "react";
import { Link } from "react-router-dom";

import styles from "layout/sidebar/sidebar.module.scss";

import { getClassListByCondition } from "lib/utils/get-class-by-condition";
import { routesURL } from "lib/enums/router.enum";

import { SidebarMenuList } from "layout/sidebar/components/sidebar-menu-list";
import { SidebarLogo } from "layout/sidebar/components/sidebar-logo";
import { SidebarToggle } from "./components/sidebar-toggle";

interface Props {
  isOpenSidebar: boolean;
  setIsOpenSidebar: Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: FC<Props> = ({ isOpenSidebar, setIsOpenSidebar }) => {
  const sidebarWrapper = getClassListByCondition(
    styles,
    "sidebarWrapper",
    "sidebarWrapperClosed",
    !isOpenSidebar
  );
  const sidebarContainer = getClassListByCondition(
    styles,
    "sidebarContainer",
    "sidebarContainerClosed",
    !isOpenSidebar
  );

  return (
    <section
      className={sidebarWrapper}
      onClick={(e) => e.stopPropagation()}
      onTouchStart={(e) => e.stopPropagation()}
    >
      <aside className={sidebarContainer}>
        <Link to={routesURL.allFilms}>
          <SidebarLogo isOpenSidebar={isOpenSidebar} />
        </Link>
        <SidebarToggle
          isOpenSidebar={isOpenSidebar}
          setIsOpenSidebar={setIsOpenSidebar}
        />
        <SidebarMenuList />
      </aside>
    </section>
  );
};

export default Sidebar;
