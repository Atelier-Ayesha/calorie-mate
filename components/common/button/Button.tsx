import { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import { button } from './Button.css';

type Props = ButtonHTMLAttributes<HTMLButtonElement> &
	PropsWithChildren<{
		colorTheme:
			| 'primary'
			| 'secondary'
			| 'tertiay'
			| 'quarternary'
			| 'invalid'
			| 'cancel';
	}>;

export function Button(props: Props) {
	const { colorTheme, children, ...rest } = props;
	return (
		<button className={button({ color: colorTheme })} {...rest}>
			{children}
		</button>
	);
}
