import { Header } from '@/components/common/header/Header';
import { API } from '@/api';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AuthAPI } from '@/types/auth';
import { CommonLayout } from '@/components/common/layout/Layout';
import { Button } from '@/components/common/button/Button';
import Form from '@/components/common/form/Form';
import Label from '@/components/common/label/Label';
import Input from '@/components/common/input/Input';
import { passwordRegExp } from '@/utils/regex';
import styles from './index.style';

export default function ResetRoot() {
	const router = useRouter();
	const { register, handleSubmit, getValues } =
		useForm<AuthAPI.TResetPassword>();

	const onSubmit: SubmitHandler<AuthAPI.TResetPassword> = async (data) => {
		try {
			await API.Auth.resetpassword(data);
			router.push('/user/reset/confirm');
			return;
		} catch (error) {
			// TODO: Sentry 설치하면 여기다 반영;
		}
	};

	return (
		<CommonLayout header={<Header headerName='비밀번호 재설정' />}>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<h3 className={styles.pageTitle}>비밀번호를 재설정합니다.</h3>
				<p className={styles.pageDesc}>
					{
						'아래의 양식에 맞게 새로운 비밀번호를 입력하여\n계정의 비밀번호를 설정해주세요.'
					}
				</p>
				<Label htmlFor='password'>비밀번호</Label>
				<Input
					id='password'
					{...register('password', {
						pattern: passwordRegExp,
						min: 8,
						max: 20,
					})}
					required
				/>
				<Label htmlFor='confirmPassword'>비밀번호 재확인</Label>
				<Input
					id='confirmPassword'
					{...register('confirmPassword', {
						pattern: passwordRegExp,
						min: 8,
						max: 20,
						validate: (value: any) => {
							console.log(value);
							if (getValues('password') === value) {
								return '솰라솰라';
							} else {
								return '';
							}
						},
					})}
					required
				/>
				<Button type='submit' colorTheme='primary'>
					비밀번호 변경하기
				</Button>
			</Form>
		</CommonLayout>
	);
}
