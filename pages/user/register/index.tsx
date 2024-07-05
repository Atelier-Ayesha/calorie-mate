import { Header } from '@/components/common/header/Header';
import InputWrapper from '@/components/common/input/Input';
import * as styles from './index.css';
import { ChangeEvent, FormEvent, useState } from 'react';
import { API } from '@/api';
import { useRouter } from 'next/navigation';
import { CommonLayout } from '@/components/common/layout/Layout';

export default function RegisterPage() {
	const router = useRouter();
	const [formInput, setFormInput] = useState({
		email: '',
		password: '',
		confirmPassword: '',
		username: '',
	});

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormInput(s => ({ ...s, [name]: value }));
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		try {
			await API.Auth.register(formInput);
			router.push('/user/register/sendmail');
			return;
		} catch (error) {
			// TODO: Sentry 설치하면 여기다 반영;
		}
	};

	return (
		<CommonLayout header={<Header headerName='회원가입' />}>
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
				<InputWrapper
					name='confirmPassword'
					onChange={e => handleInputChange(e)}
					value={formInput.confirmPassword}
					type='password'
				>
					<InputWrapper.Label>
						비밀번호 재확인
						<InputWrapper.Input />
					</InputWrapper.Label>
				</InputWrapper>
				<InputWrapper
					name='username'
					onChange={e => handleInputChange(e)}
					value={formInput.username}
					type='text'
				>
					<InputWrapper.Label>
						닉네임
						<InputWrapper.Input />
					</InputWrapper.Label>
				</InputWrapper>
				<button type='submit' className={styles.button}>
					가입하기
				</button>
			</form>
		</CommonLayout>
	);
}
