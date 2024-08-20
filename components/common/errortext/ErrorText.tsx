import { HTMLAttributes, PropsWithChildren } from 'react';
import * as S from './ErrorText.style';

type Props = HTMLAttributes<HTMLSpanElement> & PropsWithChildren;

export function ErrorText(props: Props) {
	const { children, ...rest } = props;
	return <S.ErrorText {...rest}>{children}</S.ErrorText>;
}
