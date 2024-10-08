import { Header } from '@/components/common/header/Header';
import { CommonLayout } from '@/components/common/layout/Layout';
import { Button } from '@/components/common/button/Button';
import * as S from './style';

export default function ResetConfirmRoot() {
	return (
		<CommonLayout header={<Header headerName='비밀번호 재설정' />}>
			<S.Wrapper>
				<S.Title>비밀번호가 재설정되었습니다.</S.Title>
				<S.Desc>
					{
						'성공적으로 비밀번호가 재설정됐습니다.\n\n이제 로그인 화면으로 돌아가 이메일과 새 비밀번호를\n이용해 서비스에 로그인해보시기 바랍니다.'
					}
				</S.Desc>
				<Button type='button' colorTheme='primary'>
					로그인 화면으로 이동
				</Button>
			</S.Wrapper>
		</CommonLayout>
	);
}
