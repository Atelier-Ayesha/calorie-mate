import { Header } from '@/components/common/header/Header';
import { API } from '@/api';
import { useRouter } from 'next/router';
import Label from '@/components/common/label/Label';
import Input from '@/components/common/input/Input';
import Form from '@/components/common/form/Form';
import { AuthAPI } from '@/types/auth';
import { SubmitHandler, useForm } from 'react-hook-form';
import { emailRegExp } from '@/utils/regex';
import { Button } from '@/components/common/button/Button';
import { CommonLayout } from '@/components/common/layout/Layout';
import styles from './index.style';

export default function FindRoot() {
	const router = useRouter();
	const { register, handleSubmit } = useForm<AuthAPI.TUserMail>();

	const onSubmit: SubmitHandler<AuthAPI.TUserMail> = async (data) => {
		try {
			await API.Auth.sendmail(data);
			router.push('/user/find/confirm');
			return;
		} catch (error) {
			// TODO: Sentry 설치하면 여기다 반영;
		}
	};

	const handleBack = () => {
		return router.back();
	};

	return (
		<CommonLayout header={<Header headerName='비밀번호 찾기' />}>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.description}>
					<h3 className={styles.pageTitle}>이메일을 입력해주세요.</h3>
					<p className={styles.pageDesc}>
						{'비밀번호를 재설정하기 위해\n가입했던 이메일을 입력해 주세요.'}
					</p>
				</div>
				<Label htmlFor='email'>이메일</Label>
				<Input
					id='email'
					{...register('email', { pattern: emailRegExp })}
					required
				/>
				<Button type='submit' colorTheme='primary'>
					이메일 보내기
				</Button>
				<Button type='button' colorTheme='invalid' onClick={handleBack}>
					돌아가기
				</Button>
			</Form>
		</CommonLayout>
	);
}
