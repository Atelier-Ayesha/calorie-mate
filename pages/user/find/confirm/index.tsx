import { Header } from '@/components/common/header/Header';
import * as styles from './index.css';
import Link from 'next/link';

export default function FindConfirmPage() {
	return (
		<section className={styles.wrapper}>
			<Header headerName='비밀번호 찾기' />
			<h3 className={styles.pageTitle}>이메일을 전송했습니다.</h3>
			<p className={styles.pageDesc}>
				{
					'작성해주신 이메일로 비밀번호 변경 메일을\n전송했습니다.\n\n메일함에 들어가셔서 확인 후, 내용 안에 있는 링크를 눌러\n비밀번호 재설정을 진행해주십시오.'
				}
			</p>
			<Link className={styles.button} href='/user/login'>
				로그인 화면으로 이동
			</Link>
		</section>
	);
}
