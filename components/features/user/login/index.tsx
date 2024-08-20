import { Header } from '@/components/common/header/Header';
import { CommonLayout } from '@/components/common/layout/Layout';
import { useRouter } from 'next/router';
import { API } from '@/api';
import { AuthAPI } from '@/types/auth';
import { Button } from '@/components/common/button/Button';
import { AppleIcon, GoogleIcon } from '@/assets/icons/icons';
import { emailRegExp, passwordRegExp } from '@/utils/regex';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import * as S from './style';
import { Form } from '@/components/common/form/form';
import { Label } from '@/components/common/label/label';
import Input from '@/components/common/input/Input';
import { ErrorText } from '@/components/common/errortext/ErrorText';

export default function LoginRoot() {
	const router = useRouter();
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<AuthAPI.TLogin>();

	const onSubmit: SubmitHandler<AuthAPI.TLogin> = async (data) => {
		try {
			const loginState = await API.Auth.login(data);
			console.log(loginState);
			// TODO: 온보딩 진행 여부에 따라 route 분기처리
			// router.push('/main');
			return;
		} catch (error) {
			// TODO: Sentry 설치하면 여기다 반영;
		}
	};

	const handleMoveToRegister = () => router.push('/user/register');

	const handleMoveToFind = () => router.push('/user/find');

	return (
		<CommonLayout header={<Header headerName='로그인' />}>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Label htmlFor='email'>이메일</Label>
				<S.FlexCol>
					<Controller<AuthAPI.TLogin>
						control={control}
						name='email'
						rules={{
							pattern: {
								value: emailRegExp,
								message: '이메일 양식에 맞게 입력해 주세요.',
							},
						}}
						render={({ field }) => (
							<Input<AuthAPI.TLogin> id='email' field={field} />
						)}
					/>
					<ErrorText>{errors.email?.message}</ErrorText>
				</S.FlexCol>
				<Label htmlFor='password '>비밀번호</Label>
				<S.FlexCol>
					<Controller<AuthAPI.TLogin>
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
							<Input<AuthAPI.TLogin>
								id='password'
								type='password'
								field={field}
							/>
						)}
					/>
					<ErrorText>{errors.password?.message}</ErrorText>
				</S.FlexCol>{' '}
				<Button colorTheme='primary'>로그인</Button>
			</Form>
			<S.FindPasswordButton type='button' onClick={handleMoveToFind}>
				비밀번호가 기억나지 않으세요?
			</S.FindPasswordButton>

			<S.BottomBox>
				<span>- 소셜 계정으로 로그인 -</span>
				<S.RowBox>
					<S.OauthButton title='구글 계정으로 로그인'>
						<GoogleIcon />
					</S.OauthButton>
					<S.OauthButton title='애플 계정으로 로그인'>
						<AppleIcon />
					</S.OauthButton>
				</S.RowBox>
				<Button colorTheme='border' onClick={handleMoveToRegister}>
					이메일로 가입하기
				</Button>
			</S.BottomBox>
		</CommonLayout>
	);
}
