import { Header } from '@/components/common/header/Header';
import * as styles from './index.css';
import { CommonLayout } from '@/components/common/layout/Layout';
import { useRouter } from 'next/router';
import { Button } from '@/components/common/button/Button';

export default function RegisterSendMail() {
	const router = useRouter();

	const handlePushLogin = () => {
		router.push('/user/login', undefined, { shallow: true });
	};
	return (
		<CommonLayout header={<Header headerName='회원가입' />}>
			<div className={styles.wrapper}>
				<h3>이메일을 전송했습니다.</h3>
				<h3>{`작성해주신 이메일로 비밀번호 변경 메일을\n전송했습니다.\n\n메일함에 들어가셔서 확인 후, 내용 안에 있는 링크를 눌러\n비밀번호 재설정을 진행해주십시오.`}</h3>
				<Button type='button' colorTheme='primary' onClick={handlePushLogin}>
					로그인 화면으로 이동
				</Button>
			</div>
		</CommonLayout>
	);
}
