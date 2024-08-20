import { Header } from '@/components/common/header/Header';
import { API } from '@/api';
import { useRouter } from 'next/router';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { AuthAPI } from '@/types/auth';
import { CommonLayout } from '@/components/common/layout/Layout';
import { Button } from '@/components/common/button/Button';
import { passwordRegExp } from '@/utils/regex';
import * as S from './style';
import { Label } from '@/components/common/label/label';
import { Form } from '@/components/common/form/form';
import Input from '@/components/common/input/Input';
import { ErrorText } from '@/components/common/errortext/ErrorText';

export default function ResetRoot() {
	const router = useRouter();
	const {
		control,
		handleSubmit,
		getValues,
		formState: { errors },
	} = useForm<AuthAPI.TResetPassword>();

	const onSubmit: SubmitHandler<AuthAPI.TResetPassword> = async (data) => {
		try {
			await API.Auth.resetpassword(data);
			router.push('/user/reset/confirm');
			return;
		} catch (error) {
			// TODO: Sentry 설치하면 여기다 반영;
		}
	};

	return (
		<CommonLayout header={<Header headerName='비밀번호 재설정' />}>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<S.Title>비밀번호를 재설정합니다.</S.Title>
				<S.Desc>
					{
						'아래의 양식에 맞게 새로운 비밀번호를 입력하여\n계정의 비밀번호를 설정해주세요.'
					}
				</S.Desc>

				<Label htmlFor='password'>비밀번호</Label>
				<S.FlexCol>
					<Controller<AuthAPI.TResetPassword>
						control={control}
						name='password'
						rules={{
							pattern: {
								value: passwordRegExp,
								message:
									'비밀번호는 숫자와 영문, 특수문자가 한 글자씩 포함되어야 합니다.',
							},
							min: 8,
							max: 20,
						}}
						render={({ field }) => (
							<Input<AuthAPI.TResetPassword>
								id='password'
								type='password'
								field={field}
							/>
						)}
					/>
					<ErrorText>{errors.password?.message}</ErrorText>
				</S.FlexCol>

				<S.FlexCol>
					<Label htmlFor='confirmPassword'>비밀번호 재확인</Label>
					<Controller<AuthAPI.TResetPassword>
						control={control}
						name='confirmPassword'
						rules={{
							pattern: {
								value: passwordRegExp,
								message:
									'비밀번호는 숫자와 영문, 특수문자가 한 글자씩 포함되어야 합니다.',
							},
							min: 8,
							max: 20,
							validate: (value: any) => {
								console.log(getValues('password'), value);
								if (getValues('password') !== value) {
									return '입력하신 비밀번호와 일치하지 않습니다.';
								} else {
									return '';
								}
							},
						}}
						render={({ field }) => (
							<Input<AuthAPI.TResetPassword>
								id='confirmPassword'
								type='password'
								field={field}
							/>
						)}
					/>
					<ErrorText>{errors.confirmPassword?.message}</ErrorText>
				</S.FlexCol>
				<Button type='submit' colorTheme='primary'>
					비밀번호 변경하기
				</Button>
			</Form>
		</CommonLayout>
	);
}
