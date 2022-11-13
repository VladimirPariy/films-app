import React, {FC} from "react";import {NavLink} from "react-router-dom";import styles from "./Sidebar.module.scss";import {FaBookmark, FaThList} from "react-icons/fa";import {routesURL} from "../../Lib/Enums/router.enum";interface ISidebarItem {	icon: JSX.Element;	title: string;	url: string;}type SidebarList = ISidebarItem[]export const sidebarList: SidebarList = [	{icon: <FaThList/>, title: 'All film', url: routesURL.home},	{icon: <FaBookmark/>, title: 'My favorite', url: routesURL.bookmark},]const SidebarMenuList: FC = () => {	return (		<nav>			<ul className={styles.sidebarMenu}>				{sidebarList.map((sidebarItem) => (					<li key={sidebarItem.title}>						<NavLink to={sidebarItem.url} className={({isActive}) =>							isActive ? styles.active : undefined} end>							{sidebarItem.icon}							<span>                	{sidebarItem.title}              	</span>						</NavLink>					</li>				))}			</ul>		</nav>	);};export default SidebarMenuList;