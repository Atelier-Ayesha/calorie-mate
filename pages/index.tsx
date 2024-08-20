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
			<form
				style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
			></form>
		</main>
	);
}
