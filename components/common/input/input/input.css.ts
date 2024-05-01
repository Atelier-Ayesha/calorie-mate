import { style } from '@vanilla-extract/css';

export const label = style({
	display: 'flex',
	flexDirection: 'column',
	fontFamily: 'Pretendard',
	fontStyle: 'normal',
	fontWeight: 500,
	fontSize: '12px',
	lineHeight: '16px',
	gap: '8px',
	color: '#252525',
});

export const input = style({
	width: '330px',
	height: '44px',
	background: '#F6F6F6',
	padding: '12px 16px',
	border: '1px solid #252525',
	borderRadius: '4px',
	boxSizing: 'border-box',
	fontFamily: 'Pretendard',
	fontStyle: 'normal',
	fontWeight: 500,
	fontSize: '14px',
	lineHeight: '20px',
	color: '#252525',
});
