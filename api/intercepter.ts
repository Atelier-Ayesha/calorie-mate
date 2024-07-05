import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API,
	withCredentials: true,
});

instance.interceptors.request.use(
	function (config) {
		config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
		return config;
	},
	function (error) {
		console.error(error);
		return Promise.reject(error);
	}
);

instance.interceptors.response.use(
	function (config) {
		// *MEMO: 서버 상태 에러값만 나중에 봅시다.
		config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
		return config;
	},
	function (error) {
		console.error(error);
		return Promise.reject(error);
	}
);

export const preInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API,
});

export default instance;
