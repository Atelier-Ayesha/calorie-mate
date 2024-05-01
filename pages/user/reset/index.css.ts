import { style } from '@vanilla-extract/css';

export const wrapper = style({
	display: 'flex',
	flexDirection: 'column',
	marginTop: '108px',
	padding: '0 16px',
});

export const description = style({
	display: 'flex',
	flexDirection: 'column',
	gap: '12px',
});

export const pageTitle = style({
	fontFamily: 'Pretendard',
	fontWeight: 500,
	fontSize: '20px',
	lineHeight: '24px',
	color: '#252525',
});

export const pageDesc = style({
	fontFamily: 'Pretendard',
	fontWeight: 300,
	fontSize: '14px',
	lineHeight: '18px',
	color: '#252525',
	whiteSpace: 'pre-wrap',
});

export const form = style({
	display: 'flex',
	flexDirection: 'column',
	marginTop: '24px',
	gap: '20px',
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
	margin: '12px 0',
});
