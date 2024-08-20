import { Header } from '@/components/common/header/Header';
import { API } from '@/api';
import { useRouter } from 'next/router';
import { CommonLayout } from '@/components/common/layout/Layout';
import { emailRegExp, nickNameRegExp, passwordRegExp } from '@/utils/regex';
import { Button } from '@/components/common/button/Button';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { AuthAPI } from '@/types/auth';
import { Form } from '@/components/common/form/form';
import Input from '@/components/common/input/Input';
import { Label } from '@/components/common/label/label';
import { ErrorText } from '@/components/common/errortext/ErrorText';
import * as S from './index.style';

export default function RegisterRoot() {
	const router = useRouter();
	const {
		control,
		handleSubmit,
		getValues,
		formState: { errors },
	} = useForm<AuthAPI.ICredential>();

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
				<S.FlexCol>
					<Controller<AuthAPI.ICredential>
						control={control}
						name='email'
						rules={{
							pattern: {
								value: emailRegExp,
								message: '이메일 양식에 맞게 입력해 주세요.',
							},
						}}
						render={({ field }) => (
							<Input<AuthAPI.ICredential> id='email' field={field} />
						)}
					/>
					<ErrorText>{errors.email?.message}</ErrorText>
				</S.FlexCol>

				<Label htmlFor='password'>비밀번호</Label>
				<S.FlexCol>
					<Controller<AuthAPI.ICredential>
						control={control}
						name='password'
						rules={{
							pattern: {
								value: passwordRegExp,
								message:
									'비밀번호는 숫자와 영문, 특수문자가 한 글자씩 포함되어야 합니다.',
							},
							min: 8,
							max: 20,
						}}
						render={({ field }) => (
							<Input<AuthAPI.ICredential>
								id='password'
								type='password'
								field={field}
							/>
						)}
					/>
					<ErrorText>{errors.password?.message}</ErrorText>
				</S.FlexCol>

				<S.FlexCol>
					<Label htmlFor='confirmPassword'>비밀번호 재확인</Label>
					<Controller<AuthAPI.ICredential>
						control={control}
						name='confirmPassword'
						rules={{
							pattern: {
								value: passwordRegExp,
								message:
									'비밀번호는 숫자와 영문, 특수문자가 한 글자씩 포함되어야 합니다.',
							},
							min: 8,
							max: 20,
							validate: (value: any) => {
								console.log(getValues('password'), value);
								if (getValues('password') !== value) {
									return '입력하신 비밀번호와 일치하지 않습니다.';
								} else {
									return '';
								}
							},
						}}
						render={({ field }) => (
							<Input<AuthAPI.ICredential>
								id='confirmPassword'
								type='password'
								field={field}
							/>
						)}
					/>
					<ErrorText>{errors.confirmPassword?.message}</ErrorText>
				</S.FlexCol>

				<S.FlexCol>
					<Label htmlFor='nickName'>닉네임</Label>
					<Controller<AuthAPI.ICredential>
						control={control}
						name='nickName'
						rules={{
							pattern: {
								value: nickNameRegExp,
								message:
									'비밀번호는 숫자와 영문, 특수문자가 한 글자씩 포함되어야 합니다.',
							},
							min: 2,
							max: 8,
						}}
						render={({ field }) => (
							<Input<AuthAPI.ICredential> id='nickName' field={field} />
						)}
					/>
					<ErrorText>{errors.nickName?.message}</ErrorText>
				</S.FlexCol>

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
