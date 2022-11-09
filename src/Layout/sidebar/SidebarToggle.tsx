import React, {Dispatch, FC} from "react";
import styles from "./Sidebar.module.scss";

import {AiOutlineLeft} from "react-icons/ai";

import {getClassListByCondition} from "../../Lib/Utils/funcForGetClassByCondition";

interface Props {
	isOpenSidebar: boolean;
	setIsOpenSidebar: Dispatch<React.SetStateAction<boolean>>
}

const SidebarToggle: FC<Props> = ({isOpenSidebar, setIsOpenSidebar}) => {
	const sidebarToggling = getClassListByCondition(styles, 'arrowForOpeningSidebar', 'arrowForClosingSidebar', !isOpenSidebar);
	
	const toggleSidebarHandler = (): void => {
		setIsOpenSidebar(prev => !prev);
	}
	return (
		<section className={styles.toggleContainer}>
			<article className={sidebarToggling} onClick={toggleSidebarHandler}>
				<AiOutlineLeft/>
			</article>
		</section>
	);
};

export default SidebarToggle;