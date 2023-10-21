import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchCheckAuth } from './redux/auth/asyncActions';
import { AppDispatch } from './redux/store';

import { Generate, Login, NotFound, Register, Settings, Share, Storage } from './pages';
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
