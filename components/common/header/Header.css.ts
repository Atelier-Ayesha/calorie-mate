import { style } from '@vanilla-extract/css';

export const wrapper = style({
	position: 'fixed',
	width: '100%',
	height: '84px',
	top: 0,
});

export const topBox = style({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	width: '100%',
	height: '72px',
	color: '#fff',
	backgroundColor: '#7024AD',
	paddingLeft: '20px',
	paddingRight: '20px',
});

export const triangle = style({
	width: 0,
	height: 0,
	borderTop: '12px solid #7024AD',
	borderLeft: '100vw solid transparent',
	filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
});

export const backArea = style({
	width: '36px',
});

export const title = style({});

export const menuArea = style({
	margin: '16px 16px 16px 0',
});
