import { AuthAPI } from '@/types/auth';
import instance from '../intercepter';
import { use } from 'react';

export const register = (credential: AuthAPI.ISignUp) => {
	const { confirmPassword, ...rest } = credential;

	return instance({
		url: '/user/auth/register',
		data: {
			...rest,
		},
	});
};
