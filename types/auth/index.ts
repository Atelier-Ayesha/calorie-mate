export namespace AuthAPI {
	export interface ICredential {
		email: string;
		password: string;
		confirmPassword?: string;
		nickName: string;
	}
	export type TLogin = Pick<ICredential, 'email' | 'password'>;
	export type TUserMail = Pick<ICredential, 'email'>;
	export type TVerify = Pick<ICredential, 'email'> & { code: number };
	export type TResetPassword = Pick<
		ICredential,
		'password' | 'confirmPassword'
	>;
}
