import { PropsWithChildren, ReactNode } from 'react';
import * as styles from './Layout.css';

interface Props {
	header?: ReactNode;
	footer?: ReactNode;
}

export function CommonLayout(props: PropsWithChildren<Props>) {
	const { header, children, footer } = props;
	return (
		<main className={styles.layout}>
			{header}
			{children}
			{footer}
		</main>
	);
}
