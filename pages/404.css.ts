import { style } from '@vanilla-extract/css';

export const wrapper = style({
	maxWidth: '360px',
	padding: '0 16px',
});

export const imageBox = style({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	margin: '120px 25px 48px',
});

export const image = style({
	maxWidth: '300px',
});

export const textBox = style({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	gap: '4px',
	margin: '24px 0 48px',
});

export const button = style({
	backgroundColor: '#A35ADD',
	height: '44px',
	width: '100%',
	fontSize: '14px',
	lineHeight: '20px',
	fontFamily: 'Pretendard',
	borderRadius: '4px',
	color: '#FFF',
	border: 'none',
	outline: 'none',
	cursor: 'pointer',
});
