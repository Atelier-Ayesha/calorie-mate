import { Header } from '@/components/common/header/Header';
import InputWrapper from '@/components/common/input/input/Input';
import * as styles from './index.css';
import { ChangeEvent, useState } from 'react';

export default function SignUp() {
	const [formInput, setFormInput] = useState({
		email: '',
		password: '',
		comfirmPassword: '',
		username: '',
	});

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormInput(s => ({ ...s, [name]: value }));
	};
	return (
		<section className={styles.wrapper}>
			<Header headerName='회원가입' />

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
				<InputWrapper
					name='comfirmPassword'
					onChange={e => handleInputChange(e)}
					value={formInput.comfirmPassword}
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
				<button className={styles.button}>가입하기</button>
			</form>
		</section>
	);
}
