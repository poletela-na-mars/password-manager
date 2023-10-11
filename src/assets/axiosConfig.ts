import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';

const instance: AxiosInstance = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
});

instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
	config.headers.Authorization = window.localStorage.getItem('token');
	return config;
});

export default instance;
