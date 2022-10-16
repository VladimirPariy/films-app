import {FC, useState} from 'react'
import styles from './Sidebar.module.scss'
import {getClassList} from "../../util/utils";

import {GiFilmSpool} from "react-icons/gi";
import {AiOutlineLeft} from "react-icons/ai";


const Sidebar: FC = () => {
    const [openedSidebar, setOpenedSidebar] = useState<boolean>(false);

    const toggleSidebarHandler = (): void => setOpenedSidebar(prev => !prev);

    const classListForSidebarContainer = getClassList(styles, 'sidebarContainer', 'sidebarContainerClosed', !openedSidebar);
    const classListForSidebarLogo = getClassList(styles, 'logo', 'logoDuringSidebarToggling', !openedSidebar);
    const classListForSidebarToggling = getClassList(styles, 'arrowForOpeningSidebar', 'arrowForClosingSidebar', !openedSidebar);

    return (
        <aside className={classListForSidebarContainer}>
            <div className={classListForSidebarLogo}>
                <GiFilmSpool/>
            </div>
            <div className={classListForSidebarToggling} onClick={toggleSidebarHandler}>
                <AiOutlineLeft/>
            </div>
            <nav>

            </nav>

        </aside>

    )
}

export default Sidebar