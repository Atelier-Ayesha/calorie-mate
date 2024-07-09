import InputWrapper from '@/components/common/input/Input';
import { ChangeEvent, useState } from 'react';

export default function Home() {
	const [formInput, setFormInput] = useState({ id: '', password: '' });
	// const login = useGoogleLogin({
	// 	onSuccess: (res) => console.log(res),
	// 	flow: 'auth-code',
	// });

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormInput((s) => ({ ...s, [name]: value }));
	};

	return (
		<main>
			칼로리 메이트
			<form style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
				<InputWrapper
					name='id'
					onChange={handleInputChange}
					value={formInput.id}
					type='text'
				>
					<InputWrapper.Label>
						ID
						<InputWrapper.Input />
					</InputWrapper.Label>
				</InputWrapper>

				<InputWrapper
					name='password'
					onChange={handleInputChange}
					value={formInput.password}
					type='password'
				>
					<InputWrapper.Label>
						Password
						<InputWrapper.Input />
					</InputWrapper.Label>
				</InputWrapper>
			</form>
		</main>
	);
}
