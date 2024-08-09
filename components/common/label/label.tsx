'use client';
import { LabelHTMLAttributes, PropsWithChildren } from 'react';
import { label } from './Label.style';

type TLabel = PropsWithChildren & LabelHTMLAttributes<HTMLLabelElement>;

export default function Label(props: TLabel) {
	const { children, ...rest } = props;
	return (
		<label className={label} {...rest}>
			{children}
		</label>
	);
}
