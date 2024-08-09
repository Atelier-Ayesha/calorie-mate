'use client';
import { FormHTMLAttributes, PropsWithChildren } from 'react';
import { form } from './Form.style';

export default function Form(
	props: PropsWithChildren & FormHTMLAttributes<HTMLFormElement>
) {
	const { children, ...rest } = props;
	return (
		<form className={form} {...rest}>
			{children}
		</form>
	);
}
