'use client';
import { Header } from '@/components/common/header/Header';
import InputWrapper from '@/components/common/input/Input';
import styles from './index.css';
import { ChangeEvent, FormEvent, useState } from 'react';
import { API } from '@/api';
import { useRouter } from 'next/navigation';

export default function ResetRoot() {
	const router = useRouter();
	const [formInput, setFormInput] = useState({
		password: '',
		confirmPassword: '',
	});

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormInput((s) => ({ ...s, [name]: value }));
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		try {
			await API.Auth.resetpassword(formInput);
			router.push('/user/reset/confirm');
			return;
		} catch (error) {
			// TODO: Sentry 설치하면 여기다 반영;
		}
	};

	return (
		<section className={styles.wrapper}>
			<Header headerName='비밀번호 재설정' />
			<div className={styles.description}>
				<h3 className={styles.pageTitle}>비밀번호를 재설정합니다.</h3>
				<p className={styles.pageDesc}>
					{
						'아래의 양식에 맞게 새로운 비밀번호를 입력하여\n계정의 비밀번호를 설정해주세요.'
					}
				</p>
			</div>

			<form className={styles.form} onSubmit={handleSubmit}>
				<InputWrapper
					name='password'
					onChange={(e) => handleInputChange(e)}
					value={formInput.password}
					type='password'
				>
					<InputWrapper.Label>
						새 비밀번호
						<InputWrapper.Input />
					</InputWrapper.Label>
				</InputWrapper>
				<InputWrapper
					name='confirmPassword'
					onChange={(e) => handleInputChange(e)}
					value={formInput.confirmPassword}
					type='password'
				>
					<InputWrapper.Label>
						새 비밀번호 재확인
						<InputWrapper.Input />
					</InputWrapper.Label>
				</InputWrapper>
				<button type='submit' className={styles.button}>
					이메일 보내기
				</button>
			</form>
		</section>
	);
}
