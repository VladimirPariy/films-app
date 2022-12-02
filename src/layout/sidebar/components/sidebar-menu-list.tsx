import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { FaBookmark, FaThList } from "react-icons/fa";

import styles from "layout/sidebar/sidebar.module.scss";

import { routesURL } from "lib/enums/router.enum";

import { selectWatchlist } from "store/selectors/watchlist-selector";
import { useAppSelector } from "store/store-types";

interface ISidebarItem {
  icon: JSX.Element;
  title: string;
  url: string;
}

type SidebarList = ISidebarItem[];

export const sidebarList: SidebarList = [
  { icon: <FaThList />, title: "All film", url: routesURL.allFilms },
  { icon: <FaBookmark />, title: "Watchlist", url: routesURL.watchlist },
];

const SidebarMenuList: FC = () => {
  const watchlist = useAppSelector(selectWatchlist);
  return (
    <nav>
      <ul className={styles.sidebarMenu}>
        {sidebarList.map((sidebarItem) => (
          <li key={sidebarItem.title}>
            <NavLink
              to={sidebarItem.url}
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              end
            >
              {sidebarItem.title === "Watchlist" ? (
                <>
                  {sidebarItem.icon}
                  {watchlist.length > 0 && (
                    <div className={styles.watchlistCounter}>
                      {watchlist.length}
                    </div>
                  )}
                  <span>{sidebarItem.title}</span>
                </>
              ) : (
                <>
                  {sidebarItem.icon}
                  <span>{sidebarItem.title}</span>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { SidebarMenuList };
