import React, {FC} from "react";
import Sidebar from "./components/sidebar/Sidebar";
import AppRouter from "./components/appRouter/AppRouter";

const App: FC = () => {
	return (
		<>
			<Sidebar/>
			<AppRouter/>
		</>
	);
}

export default App;
