import { Header } from '@/components/common/header/Header';
import InputWrapper from '@/components/common/input/Input';
import * as styles from './index.css';
import { ChangeEvent, FormEvent, useState } from 'react';
import { CommonLayout } from '@/components/common/layout/Layout';
import { useRouter } from 'next/navigation';
import { API } from '@/api';
import { AuthAPI } from '@/types/auth';

export default function LoginPage() {
	const router = useRouter();
	const [formInput, setFormInput] = useState<AuthAPI.TLogin>({
		email: '',
		password: '',
	});

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormInput(s => ({ ...s, [name]: value }));
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		try {
			const loginState = await API.Auth.login(formInput);
			// TODO: 온보딩 진행 여부에 따라 route 분기처리
			router.push('/main');
			return;
		} catch (error) {
			// TODO: Sentry 설치하면 여기다 반영;
		}
	};

	return (
		<CommonLayout header={<Header headerName='로그인' />}>
			<form className={styles.form} onSubmit={handleSubmit}>
				<InputWrapper
					name='email'
					onChange={e => handleInputChange(e)}
					value={formInput.email}
					type='text'
				>
					<InputWrapper.Label>
						이메일
						<InputWrapper.Input />
					</InputWrapper.Label>
				</InputWrapper>
				<InputWrapper
					name='password'
					onChange={e => handleInputChange(e)}
					value={formInput.password}
					type='password'
				>
					<InputWrapper.Label>
						비밀번호
						<InputWrapper.Input />
					</InputWrapper.Label>
				</InputWrapper>
				<button className={styles.button}>홈 화면으로 이동</button>
			</form>
			<button type='submit' className={styles.findPWButton}>
				비밀번호가 기억나지 않으세요?
			</button>
		</CommonLayout>
	);
}
