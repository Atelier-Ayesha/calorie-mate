import { Header } from '@/components/common/header/Header';
import { API } from '@/api';
import { useRouter } from 'next/router';
import { CommonLayout } from '@/components/common/layout/Layout';
import { emailRegExp, nickNameRegExp, passwordRegExp } from '@/utils/regex';
import { Button } from '@/components/common/button/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AuthAPI } from '@/types/auth';
import Input from '@/components/common/input/Input';
import Form from '@/components/common/form/Form';
import Label from '@/components/common/label/Label';

export default function RegisterRoot() {
	const router = useRouter();
	const { register, handleSubmit, getValues } = useForm<AuthAPI.ICredential>();

	const onSubmit: SubmitHandler<AuthAPI.ICredential> = async (data) => {
		try {
			await API.Auth.register(data);
			router.push('/user/register/sendmail');
			return;
		} catch (error) {
			// TODO: Sentry 설치하면 여기다 반영;
		}
	};

	const handleBack = () => {
		return router.back();
	};

	return (
		<CommonLayout header={<Header headerName='회원가입' />}>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Label htmlFor='email'>이메일</Label>
				<Input
					id='email'
					{...register('email', { pattern: emailRegExp })}
					required
				/>

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

				<Label htmlFor='nickName'>닉네임</Label>
				<Input
					id='nickName'
					{...register('nickName', { pattern: nickNameRegExp, min: 2, max: 8 })}
					required
				/>

				<Button type='submit' colorTheme='primary'>
					가입하기
				</Button>
				<Button type='button' colorTheme='invalid' onClick={handleBack}>
					돌아가기
				</Button>
			</Form>
		</CommonLayout>
	);
}
