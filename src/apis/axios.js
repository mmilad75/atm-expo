import axios from 'axios';
import {BASE_URL} from '../helpers/config';

const axiosInstance = axios.create({
	baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(
	async config => config,
	error => error,
);

axiosInstance.interceptors.response.use(
	response => response,
	error => error,
);

export default axiosInstance;
