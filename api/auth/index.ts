import { AuthAPI } from '@/types/auth';
import instance from '../intercepter';

export const register = (credential: AuthAPI.ICredential) => {
	const { confirmPassword, ...rest } = credential;

	return instance({
		url: '/user/auth/register',
		data: {
			...rest,
		},
	});
};

export const login = (credential: AuthAPI.TLogin) => {
	return instance({
		url: '/user/auth/login',
		data: {
			credential,
		},
	});
};

export const verify = (credential: AuthAPI.TUserMail) => {
	return instance({
		url: '/user/auth/verify',
		data: {
			credential,
		},
	});
};

export const sendmail = (credential: AuthAPI.TUserMail) => {
	return instance({
		url: '/user/auth/sendmail',
		data: {
			credential,
		},
	});
};

export const resetpassword = (credential: AuthAPI.TResetPassword) => {
	return instance({
		url: '/user/auth/resetpassword',
		data: {
			credential,
		},
	});
};
