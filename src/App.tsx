import React, {FC, useState} from "react";

import styles from './App.module.scss';

import Sidebar from "./Layout/Sidebar/Sidebar";
import Content from "./Layout/Content/Content";

const App: FC = () => {
	const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);
	
	return (
		<main className={styles.wrapper} onClick={() => setIsOpenSidebar(false)} onTouchStart={() => setIsOpenSidebar(false)}>
			<Sidebar isOpenSidebar={isOpenSidebar} setIsOpenSidebar={setIsOpenSidebar}/>
			<Content/>
		</main>
	);
}

export default App;
