import { Header } from '@/components/common/header/Header';
import styles from './index.css';
import { CommonLayout } from '@/components/common/layout/Layout';
import { useRouter } from 'next/router';
import { API } from '@/api';
import { AuthAPI } from '@/types/auth';
import { Button } from '@/components/common/button/Button';
import { AppleIcon, GoogleIcon } from '@/assets/icons/icons';
import { emailRegExp, passwordRegExp } from '@/utils/regex';
import Form from '@/components/common/form/form';
import Label from '@/components/common/label/label';
import Input from '@/components/common/input/Input';
import { SubmitHandler, useForm } from 'react-hook-form';

export default function LoginRoot() {
	const router = useRouter();
	const { register, handleSubmit } = useForm<AuthAPI.TLogin>();

	const onSubmit: SubmitHandler<AuthAPI.TLogin> = async (data) => {
		try {
			const loginState = await API.Auth.login(data);
			// TODO: 온보딩 진행 여부에 따라 route 분기처리
			router.push('/main');
			return;
		} catch (error) {
			// TODO: Sentry 설치하면 여기다 반영;
		}
	};

	const handleMoveToRegister = () => {
		router.push('/user/register');
	};

	const handleMoveToFind = () => {
		router.push('/user/find');
	};

	return (
		<CommonLayout header={<Header headerName='로그인' />}>
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
					{...register('password', { pattern: passwordRegExp })}
					required
				/>

				<Button colorTheme='primary'>로그인</Button>
			</Form>
			<button
				type='button'
				className={styles.findPasswordButton}
				onClick={handleMoveToFind}
			>
				비밀번호가 기억나지 않으세요?
			</button>

			<div className={styles.bottomBox}>
				<span>- 소셜 계정으로 로그인 -</span>
				<div className={styles.rowBox}>
					<button
						title='구글 계정으로 로그인'
						className={styles.oauthButton}
						type='button'
					>
						<GoogleIcon />
					</button>
					<button
						title='애플 계정으로 로그인'
						className={styles.oauthButton}
						type='button'
					>
						<AppleIcon />
					</button>
				</div>
				<Button colorTheme='border' onClick={handleMoveToRegister}>
					이메일로 가입하기
				</Button>
			</div>
		</CommonLayout>
	);
}
