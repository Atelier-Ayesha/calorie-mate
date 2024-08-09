import { PropsWithChildren, ReactNode } from 'react';
import { layout } from './Layout.style';

interface Props {
	header?: ReactNode;
	footer?: ReactNode;
}

export function CommonLayout(props: PropsWithChildren<Props>) {
	const { header, children, footer } = props;
	return (
		<main className={layout}>
			{header}
			{children}
			{footer}
		</main>
	);
}
