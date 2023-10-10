import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import { store } from './redux/store';

import App from './App';

import { theme } from './scss/theme';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<App />
				</ThemeProvider>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);
