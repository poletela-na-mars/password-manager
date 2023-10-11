import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from '../../assets/axiosConfig';
import { AuthTextFieldsType, RegisterTextFieldsType, UserData } from '../../@types/auth-types';

export const fetchLogin = createAsyncThunk<UserData, AuthTextFieldsType>(
	'auth/fetchLogin', async (params) => {
		return axios.post('/auth/login', params)
			.then((res) => {
				return res.data;
			})
			.catch(async (err) => {
				console.log(err);
				await Promise.reject(JSON.stringify(err.response.data));
				return JSON.stringify(err.response.data);
			});
	});

export const fetchRegister = createAsyncThunk<UserData, RegisterTextFieldsType>('auth/fetchRegister',
	async (params) => {
		return axios.post('/auth/register', params)
			.then((res) => {
				return res.data;
			})
			.catch(async (err) => {
				console.log(err);
				await Promise.reject(JSON.stringify(err.response.data));
				return JSON.stringify(err.response.data);
			});
	});

export const fetchCheckAuth = createAsyncThunk<UserData>('auth/fetchCheckAuth', async () => {
	const { data } = await axios.get('/auth/checkAuth');
	return data;
});