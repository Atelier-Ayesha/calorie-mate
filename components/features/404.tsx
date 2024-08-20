import errorImage from '@/assets/images/error_image.webp';
import { CommonLayout } from '../common/layout/Layout';
import { useRouter } from 'next/router';
import { Header } from '../common/header/Header';
import { Button } from '../common/button/Button';
import * as S from './404.style';

export default function ErrorRoot() {
	const router = useRouter();
	const errorImg = errorImage.src;

	const handleMoveToHome = () => {
		return router.push('/main');
	};

	return (
		<CommonLayout header={<Header headerName='에러' />}>
			<S.Wrapper>
				<S.ImageBox>
					<S.Image src={errorImg}  alt='페이지 진입 에러' />
				</S.ImageBox>
				<S.TextBox >
					<p>페이지를 찾을 수 없습니다.</p>
					<p>아래의 버튼을 눌러</p>
					<p>홈화면으로 돌아가주세요.</p>
				</S.TextBox>
				<Button type='button' colorTheme='primary' onClick={handleMoveToHome}>
					홈 화면으로 이동
				</Button>
			</S.Wrapper>
		</CommonLayout>
	);
}
