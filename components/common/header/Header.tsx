import { ReactNode } from 'react';
import * as styles from './Header.css';

interface Props {
	hasBackButton?: boolean;
	backButton?: ReactNode;
	hasMenu?: boolean;
	menu?: ReactNode;
	headerName: string;
}

export function Header(props: Props) {
	const { headerName, hasBackButton, hasMenu, backButton, menu } = props;
	return (
		<header className={styles.wrapper}>
			<div className={styles.topBox}>
				<div>{hasBackButton && backButton}</div>
				<h3>{headerName}</h3>
				<div>{hasMenu && menu}</div>
			</div>
			<div className={styles.triangle} />
		</header>
	);
}
