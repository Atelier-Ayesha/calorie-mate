import { Header } from '@/components/common/header/Header';
import { CommonLayout } from '@/components/common/layout/Layout';
import { useRouter } from 'next/router';
import { API } from '@/api';
import { Button } from '@/components/common/button/Button';
import Input from '@/components/common/input/Input';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { AuthAPI } from '@/types/auth';
import { ErrorText } from '@/components/common/errortext/ErrorText';
import { Form } from '@/components/common/form/form';
import { Label } from '@/components/common/label/label';
import * as S from './style';

export default function RegisterSendMailRoot() {
	const router = useRouter();
	const { email } = router.query as Record<string, string>;
	const {
		control,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<AuthAPI.TVerify>();

	const onSubmit: SubmitHandler<AuthAPI.TVerify> = async (data) => {
		try {
			await API.Auth.verify({ ...data, email });
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
				<S.FlexCol>
					<Controller<AuthAPI.TVerify>
						control={control}
						name='code'
						render={({ field }) => (
							<Input<AuthAPI.TVerify> id='code' type='number' field={field} />
						)}
					/>
					<ErrorText>{errors.code?.message}</ErrorText>
				</S.FlexCol>

				<Button type='submit' colorTheme='primary'>
					본인 인증 확인
				</Button>
			</Form>
		</CommonLayout>
	);
}
