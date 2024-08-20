import { LabelHTMLAttributes, PropsWithChildren } from 'react';
import * as S from './Label.style';

type TLabel = PropsWithChildren & LabelHTMLAttributes<HTMLLabelElement>;

export function Label(props: TLabel) {
	const { children, ...rest } = props;

	return <S.Label {...rest}>{children}</S.Label>;
}
