import { Header } from '@/components/common/header/Header';
import InputWrapper from '@/components/common/input/Input';
import * as styles from './index.css';
import { ChangeEvent, useState } from 'react';
import { CommonLayout } from '@/components/common/layout/Layout';

export default function LoginPage() {
	const [formInput, setFormInput] = useState({ email: '', password: '' });

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormInput(s => ({ ...s, [name]: value }));
	};
	return (
		<CommonLayout header={<Header headerName='로그인' />}>
			<form className={styles.form}>
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
			<button className={styles.findPWButton}>
				비밀번호가 기억나지 않으세요?
			</button>
		</CommonLayout>
	);
}
