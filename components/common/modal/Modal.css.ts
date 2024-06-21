import { fonts } from '@/style/fonts/fonts';
import { vars } from '@/style/theme/theme.css';
import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { recipe } from '@vanilla-extract/recipes';

export const overlay = style({
	width: '100%',
	height: '100vh',
	backgroundColor: '#0000004D',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	position: 'absolute',
	zIndex: 10,
	top: 0,
});

export const container = style({
	backgroundColor: '#FFFFFF',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	textAlign: 'center',
	border: 'none',
	borderRadius: '8px',
	height: 'auto',
	width: calc.subtract('100%', '60px'),
	maxWidth: '300px',
	padding: '24px 16px',
	position: 'absolute',
	zIndex: 20,
});

export const modalHeader = recipe({
	base: {
		height: '2px',
		width: '200px',
		position: 'relative',
		borderRadius: '8px',
		display: 'flex',
		justifyContent: 'center',
		margin: '8px 0',
	},

	variants: {
		color: {
			alert: { backgroundColor: '#C80000' },
			confirm: { backgroundColor: '#5DAE48' },
			info: { backgroundColor: '#4285F4' },
		},
	},
});

export const iconArea = style({
	position: 'absolute',
	zIndex: 5,
	top: '-11px',
	borderRadius: '50%',
	background: 'white',
	height: '24px',
	width: '24px',
});

export const title = style({
	...fonts.semibold20,
	fontFamily: vars.font.body,
	color: vars.color.text,
	margin: '8px 0',
});

export const content = style({
	...fonts.light14,
	fontFamily: vars.font.body,
	color: vars.color.text,
	margin: '12px 0',
});

export const buttonArea = style({
	display: 'flex',
	width: '100%',
	gap: '16px',
	marginTop: '20px',
});
