import ReactDOM from 'react-dom/client';
import Provider from 'react-redux/es/components/Provider';
import {BrowserRouter} from 'react-router-dom';
import {PersistGate} from "redux-persist/integration/react";

import './index.scss';

import {persistor, store} from "./Store/store";

import App from './App';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<BrowserRouter>
				<App/>
			</BrowserRouter>
		</PersistGate>
	</Provider>
);