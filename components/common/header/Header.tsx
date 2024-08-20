import { ReactNode } from 'react';
import * as S from './Header.style';

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
		<S.Wrapper>
			<S.TopBox>
				<div>{hasBackButton && backButton}</div>
				<h3>{headerName}</h3>
				<div>{hasMenu && menu}</div>
			</S.TopBox>
			<S.Triangle />
		</S.Wrapper>
	);
}
