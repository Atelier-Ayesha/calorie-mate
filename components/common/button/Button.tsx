'use client';
import { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import { button } from './Button.style';

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
	return (
		<button className={button} {...rest}>
			{children}
		</button>
	);
}
