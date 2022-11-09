import ReactDOM from 'react-dom/client';
import Provider from 'react-redux/es/components/Provider';
import {BrowserRouter} from 'react-router-dom';

import App from './App';
import './index.scss';
import {store} from "./Store";


const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<App/>
		</BrowserRouter>
	</Provider>
);