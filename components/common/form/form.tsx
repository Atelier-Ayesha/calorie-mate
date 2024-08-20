import { FormHTMLAttributes, PropsWithChildren } from 'react';
import * as S from './Form.style';

export function Form(
	props: PropsWithChildren & FormHTMLAttributes<HTMLFormElement>,
) {
	const { children, ...rest } = props;
	return <S.Form {...rest}>{children}</S.Form>;
}
