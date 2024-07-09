import { Header } from '@/components/common/header/Header';
import styles from './index.css';
import Link from 'next/link';

export default function ResetConfirmRoot() {
	return (
		<section className={styles.wrapper}>
			<Header headerName='비밀번호 재설정' />
			<h3 className={styles.pageTitle}>비밀번호가 재설정되었습니다.</h3>
			<p className={styles.pageDesc}>
				{
					'성공적으로 비밀번호가 재설정됐습니다.\n\n이제 로그인 화면으로 돌아가 이메일과 새 비밀번호를\n이용해 서비스에 로그인해보시기 바랍니다.'
				}
			</p>

			<Link className={styles.button} href='/user/login'>
				로그인 화면으로 이동
			</Link>
		</section>
	);
}
