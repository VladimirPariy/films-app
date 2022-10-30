import React, {FC} from "react";
import styles from "./Sidebar.module.scss";

import {GiFilmSpool} from "react-icons/gi";

import {getClassListByCondition} from "../../lib/utils";

interface Props {
	isOpenSidebar: boolean
}

const SidebarLogo: FC<Props> = ({isOpenSidebar}) => {
	const sidebarLogo = getClassListByCondition(styles, 'logo', 'logoDuringSidebarToggling', !isOpenSidebar);
	return (
		<section className={sidebarLogo}>
			<GiFilmSpool/>
		</section>
	);
};

export default SidebarLogo;