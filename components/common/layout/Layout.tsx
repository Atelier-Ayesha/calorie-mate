import { PropsWithChildren, ReactNode } from 'react';
import * as S from './Layout.style';

interface Props {
	header?: ReactNode;
	footer?: ReactNode;
}

export function CommonLayout(props: PropsWithChildren<Props>) {
	const { header, children, footer } = props;

	return (
		<S.Layout>
			{header}
			{typeof children !== undefined && children}
			{typeof footer !== undefined && footer}
		</S.Layout>
	);
}
