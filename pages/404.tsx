import errorImage from '@/assets/images/error_image.webp';
import { style } from '@vanilla-extract/css';
import * as styles from './404.css';

export default function ErrorPage() {
	const errorImg = errorImage.src;

	return (
		<section>
			<div>
				<img src={errorImg} />
			</div>
			<button className={styles.button}>홈 화면으로 이동</button>
		</section>
	);
}
