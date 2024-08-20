import { Header } from '@/components/common/header/Header';
import { CommonLayout } from '@/components/common/layout/Layout';
import { useRouter } from 'next/router';
import { Button } from '@/components/common/button/Button';
import * as S from './style';

export default function FindConfirmPageRoot() {
	const router = useRouter();

	const handleMoveToLogin = () => {
		return router.push('/user/login');
	};

	return (
		<CommonLayout header={<Header headerName='비밀번호 찾기' />}>
			<S.Wrapper>
				<S.Title>이메일을 전송했습니다.</S.Title>
				<S.Desc>
					{
						'작성해주신 이메일로 비밀번호 변경 메일을\n전송했습니다.\n\n메일함에 들어가셔서 확인 후, 내용 안에 있는 링크를 눌러\n비밀번호 재설정을 진행해주십시오.'
					}
				</S.Desc>
				<Button type='submit' colorTheme='primary' onClick={handleMoveToLogin}>
					로그인 화면으로 이동
				</Button>
			</S.Wrapper>
		</CommonLayout>
	);
}
