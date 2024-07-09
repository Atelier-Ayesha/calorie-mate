import errorImage from '@/assets/images/error_image.webp';
import styles from './404.css';
import { Header } from '@/components/common/header/Header';

export default function ErrorRoot() {
	const errorImg = errorImage.src;

	return (
		<section className={styles.wrapper}>
			<Header headerName='에러' />
			<div className={styles.imageBox}>
				<img src={errorImg} className={styles.image} />
			</div>
			<div className={styles.textBox}>
				<p>페이지를 찾을 수 없습니다.</p>
				<p>아래의 버튼을 눌러</p>
				<p>홈화면으로 돌아가주세요.</p>
			</div>
			<button className={styles.button}>홈 화면으로 이동</button>
		</section>
	);
}
