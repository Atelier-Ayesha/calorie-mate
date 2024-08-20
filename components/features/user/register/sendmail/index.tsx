import { Header } from '@/components/common/header/Header';
import { CommonLayout } from '@/components/common/layout/Layout';
import { useRouter } from 'next/router';
import { API } from '@/api';
import { Button } from '@/components/common/button/Button';
import Label from '@/components/common/label/Label';
import Input from '@/components/common/input/Input';
import Form from '@/components/common/form/Form';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AuthAPI } from '@/types/auth';

export default function RegisterSendMailRoot() {
	const router = useRouter();
	const { register, handleSubmit } = useForm<AuthAPI.TVerify>();

	const onSubmit: SubmitHandler<AuthAPI.TVerify> = async (data) => {
		try {
			await API.Auth.verify(data);
			// TODO: 온보딩 진행 여부에 따라 route 분기처리
			return;
		} catch (error) {
			// TODO: Sentry 설치하면 여기다 반영;
		}
	};

	return (
		<CommonLayout header={<Header headerName='회원가입' />}>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<h3>칼로리메이트 님, 인증 번호를 입력해주세요.</h3>
				<h3>
					입력하신 이메일 주소로 인증 번호를 보내드렸어요. 메일을 확인하셔서,
					아래에 인증번호를 입력 하신 뒤 본인 인증 절차를 진행해주세요!
				</h3>
				<Label htmlFor='code'>인증 번호</Label>
				<Input id='code' {...register('code', { max: 8 })} required />

				<Button type='submit' colorTheme='primary'>
					본인 인증 확인
				</Button>
			</Form>
		</CommonLayout>
	);
}
