import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../assets/axiosConfig';

// TODO - provide types
export const fetchLogin = createAsyncThunk('auth/fetchLogin', async (params: any) => {
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

// TODO - provide types
export const fetchRegister = createAsyncThunk('auth/fetchRegister', async (params: any) => {
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

export const fetchCheckAuth = createAsyncThunk('auth/fetchCheckAuth', async () => {
	const { data } = await axios.get('/auth/checkAuth');
	return data;
});