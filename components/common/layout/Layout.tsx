import { PropsWithChildren, ReactNode } from 'react';
import { Header } from '../header/Header';
import { themeClass } from '@/style/theme/theme.css';
import * as styles from './Layout.css';

interface Props {
	header?: ReactNode;
	footer?: ReactNode;
}

export function CommonLayout(props: PropsWithChildren<Props>) {
	const { header, children, footer } = props;
	return (
		<main className={themeClass}>
			<section className={styles.layout}>
				{header}
				{children}
				{footer}
			</section>
		</main>
	);
}
