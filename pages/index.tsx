import InputWrapper from '@/components/common/input/input/Input';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { ChangeEvent, useState } from 'react';

export default function Home() {
	const [formInput, setFormInput] = useState({ id: '', password: '' });

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormInput(s => ({ ...s, [name]: value }));
	};

	console.log(formInput);

	return (
		<>
			<main>
				칼로리 메이트
				<GoogleOAuthProvider
					clientId={process.env.NEXT_PUBLIC_GOOGLE_OAUTH_PROVIDER_CLIEND_ID}
				>
					<GoogleLogin
						onSuccess={credentialResponse => {}}
						onError={() => console.log('')}
					/>
					<form style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
						<InputWrapper
							name='id'
							onChange={e => handleInputChange(e)}
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
							onChange={e => handleInputChange(e)}
							value={formInput.password}
							type='password'
						>
							<InputWrapper.Label>
								Password
								<InputWrapper.Input />
							</InputWrapper.Label>
						</InputWrapper>
					</form>
				</GoogleOAuthProvider>
			</main>
		</>
	);
}
