import { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import * as S from './Button.style';

type Props = ButtonHTMLAttributes<HTMLButtonElement> &
	PropsWithChildren<{
		colorTheme:
			| 'primary'
			| 'secondary'
			| 'tertiay'
			| 'quarternary'
			| 'invalid'
			| 'border'
			| 'cancel';
	}>;

export function Button(props: Props) {
	const { colorTheme, children, ...rest } = props;
	return <S.Button {...rest}>{children}</S.Button>;
}
