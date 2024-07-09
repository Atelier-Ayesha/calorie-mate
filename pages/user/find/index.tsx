'use client';
import { Header } from '@/components/common/header/Header';
import InputWrapper from '@/components/common/input/Input';
import * as styles from './index.css';
import { ChangeEvent, FormEvent, useState } from 'react';
import { API } from '@/api';
import { useRouter } from 'next/navigation';

export default function FindPage() {
	const router = useRouter();
	const [formInput, setFormInput] = useState({ email: '' });

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormInput(s => ({ ...s, [name]: value }));
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		try {
			await API.Auth.sendmail(formInput);
			router.push('/user/find/confirm');
			return;
		} catch (error) {
			// TODO: Sentry 설치하면 여기다 반영;
		}
	};

	return (
		<section className={styles.wrapper}>
			<Header headerName='비밀번호 찾기' />
			<div className={styles.description}>
				<h3 className={styles.pageTitle}>이메일을 입력해주세요.</h3>
				<p className={styles.pageDesc}>
					{'비밀번호를 재설정하기 위해\n가입했던 이메일을 입력해 주세요.'}
				</p>
			</div>

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
				<button type='submit' className={styles.button}>
					이메일 보내기
				</button>
			</form>
		</section>
	);
}
