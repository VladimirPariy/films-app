import {FC, useState} from 'react'
import {NavLink} from "react-router-dom";
import styles from './Sidebar.module.scss'

import {getClassListByCondition} from "../../util/utils";

import {GiFilmSpool} from "react-icons/gi";
import {AiOutlineLeft} from "react-icons/ai";

import {sidebarList} from './sidebarMenuList';


const Sidebar: FC = () => {
	const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);
	
	const toggleSidebarHandler = (): void => {
		setIsOpenSidebar(prev => !prev);
	}
	
	
	const sidebarLogo = getClassListByCondition(styles, 'logo', 'logoDuringSidebarToggling', !isOpenSidebar);
	const sidebarContainer = getClassListByCondition(styles, 'sidebarContainer', 'sidebarContainerClosed', !isOpenSidebar);
	const sidebarToggling = getClassListByCondition(styles, 'arrowForOpeningSidebar', 'arrowForClosingSidebar', !isOpenSidebar);
	
	
	return (
		<aside className={sidebarContainer}>
			<div className={sidebarLogo}>
				<GiFilmSpool/>
			</div>
			<div className={styles.toggleContainer}>
				<div className={sidebarToggling} onClick={toggleSidebarHandler}>
					<AiOutlineLeft/>
				</div>
			</div>
			<nav>
				<ul className={styles.sidebarMenu}>
					{sidebarList.map((sidebarItem) => (
						<li key={sidebarItem.title}>
							<NavLink to={sidebarItem.url} className={({isActive}) =>
								isActive ? styles.active : undefined} end>
								{sidebarItem.icon}
								<span>
                	{sidebarItem.title}
              	</span>
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
		
		</aside>
	
	)
}

export default Sidebar