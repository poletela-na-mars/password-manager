import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../assets/axiosConfig';

export const fetchAuth = createAsyncThunk('auth/fetchAuth', async (params) => {
	return axios.post('/auth/login', params)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.log(err.response.data.message);
			return Promise.reject(err.response.data.message);
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
			// return JSON.stringify(err);
			// return Promise.reject(JSON.stringify(err));
		});
});

export const fetchCheckAuth = createAsyncThunk('auth/fetchCheckAuth', async () => {
	const { data } = await axios.get('/auth/checkAuth');
	return data;
});