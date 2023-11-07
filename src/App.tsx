import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchCheckAuth } from './redux/auth/asyncActions';
import { AppDispatch } from './redux/store';

import {
	AddFolder,
	AddRecord,
	EditFolder,
	EditRecord,
	Favourites,
	Folders,
	Generate,
	Login,
	NotFound,
	Records,
	Register,
	Settings,
	Share,
	Storage,
	ViewFolder,
	ViewRecord
} from './pages';
import { MainLayout } from './layouts/MainLayout';

import './index.scss';

function App() {
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(fetchCheckAuth());
	}, [dispatch]);

	return (
		<Routes>
			<Route path='*' element={<NotFound />} />
			<Route path='/' element={<MainLayout />}>

				<Route path='' element={<Storage />} />

				<Route path='add-record' element={<AddRecord />} />
				<Route path='records' element={<Records />} />
				<Route path='records/:id' element={<ViewRecord />} />
				<Route path='records/:id/edit' element={<EditRecord />} />

				<Route path='add-folder' element={<AddFolder />} />
				<Route path='folders' element={<Folders />} />
				<Route path='folders/:id' element={<ViewFolder />} />
				<Route path='folders/:id/edit' element={<EditFolder />} />

				<Route path='favourites' element={<Favourites />} />

				<Route path='share' element={<Share />} />
				<Route path='generate' element={<Generate />} />
				<Route path='settings' element={<Settings />} />
			</Route>

			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Register />} />
		</Routes>
	);
}

export default App;
