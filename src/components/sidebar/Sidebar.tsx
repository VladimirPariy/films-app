import {FC, useState} from 'react'
import styles from './Sidebar.module.scss'

import {getClassListByCondition} from "../../lib/utils";

import SidebarMenuList from "./SidebarMenuList";
import SidebarLogo from "./SidebarLogo";
import SidebarToggle from "./SidebarToggle";


const Sidebar: FC = () => {
	const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);
	
	const sidebarWrapper = getClassListByCondition(styles, 'sidebarWrapper', 'sidebarWrapperClosed', !isOpenSidebar);
	const sidebarContainer = getClassListByCondition(styles, 'sidebarContainer', 'sidebarContainerClosed', !isOpenSidebar);
	
	return (
		<div className={sidebarWrapper}>
			<aside className={sidebarContainer}>
				<SidebarLogo isOpenSidebar={isOpenSidebar}/>
				<SidebarToggle isOpenSidebar={isOpenSidebar} setIsOpenSidebar={setIsOpenSidebar}/>
				<SidebarMenuList/>
			</aside>
		</div>
	)
}

export default Sidebar