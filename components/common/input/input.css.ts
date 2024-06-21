import { fonts } from '@/style/fonts/fonts';
import { vars } from '@/style/theme/theme.css';
import { style } from '@vanilla-extract/css';
import { versions } from 'process';

export const label = style({
	display: 'flex',
	flexDirection: 'column',
	fontFamily: vars.font.body,
	color: vars.color.text,
	gap: '8px',
	...fonts.medium12,
});

export const input = style({
	width: '330px',
	height: '44px',
	background: '#F6F6F6',
	padding: '12px 16px',
	border: '1px solid ' + vars.color.text,
	borderRadius: '4px',
	boxSizing: 'border-box',
	fontFamily: vars.font.body,
	color: vars.color.text,
	...fonts.medium14,
});
