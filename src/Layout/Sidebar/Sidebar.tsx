import React, {Dispatch, FC} from 'react'
import styles from './Sidebar.module.scss'

import {getClassListByCondition} from "../../Lib/Utils/getClassByCondition";

import SidebarMenuList from "./SidebarMenuList";
import SidebarLogo from "./SidebarLogo";
import SidebarToggle from "./SidebarToggle";

interface Props {
	isOpenSidebar: boolean;
	setIsOpenSidebar: Dispatch<React.SetStateAction<boolean>>
}

const Sidebar: FC<Props> = ({isOpenSidebar, setIsOpenSidebar}) => {
	
	const sidebarWrapper = getClassListByCondition(styles, 'sidebarWrapper', 'sidebarWrapperClosed', !isOpenSidebar);
	const sidebarContainer = getClassListByCondition(styles, 'sidebarContainer', 'sidebarContainerClosed', !isOpenSidebar);
	
	return (
		<section className={sidebarWrapper} onClick={(e) => e.stopPropagation()}>
			<aside className={sidebarContainer}>
				<SidebarLogo isOpenSidebar={isOpenSidebar}/>
				<SidebarToggle isOpenSidebar={isOpenSidebar} setIsOpenSidebar={setIsOpenSidebar}/>
				<SidebarMenuList/>
			</aside>
		</section>
	)
}

export default Sidebar