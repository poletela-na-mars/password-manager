import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchCheckAuth } from './redux/auth/asyncActions';
import { AppDispatch } from './redux/store';

import { Login, Register, Storage } from './pages';
import { MainLayout } from './layouts/MainLayout';

import './index.scss';

function App() {
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(fetchCheckAuth());
	}, [dispatch]);

	return (
		<Routes>
			{/*<Route path='*' element={<NotFound />} />*/}
			<Route path='/' element={<MainLayout />}>
				<Route path='' element={<Storage />} />
			</Route>
			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Register />} />
		</Routes>
	);
}

export default App;
