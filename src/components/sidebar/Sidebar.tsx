import {FC, useState} from 'react'
import styles from './Sidebar.module.scss'

import {getClassListByCondition} from "../../lib/utils";
import SidebarMenuList from "./SidebarMenuList";
import SidebarLogo from "./SidebarLogo";
import SidebarToggle from "./SidebarToggle";


const Sidebar: FC = () => {
	const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);
	
	const sidebarContainer = getClassListByCondition(styles, 'sidebarContainer', 'sidebarContainerClosed', !isOpenSidebar);
	
	return (
		<aside className={sidebarContainer}>
			<SidebarLogo isOpenSidebar={isOpenSidebar}/>
			<SidebarToggle isOpenSidebar={isOpenSidebar} setIsOpenSidebar={setIsOpenSidebar}/>
			<SidebarMenuList/>
		</aside>
	)
}

export default Sidebar