import { ReactNode } from 'react';
import { topBox, triangle, wrapper } from './Header.style';

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
		<header className={wrapper}>
			<div className={topBox}>
				<div>{hasBackButton && backButton}</div>
				<h3>{headerName}</h3>
				<div>{hasMenu && menu}</div>
			</div>
			<div className={triangle} />
		</header>
	);
}
