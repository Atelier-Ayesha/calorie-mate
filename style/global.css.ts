import { globalStyle } from '@vanilla-extract/css';

globalStyle('*', {
	margin: 0,
	padding: 0,
	boxSizing: 'border-box',
	fontFamily: 'Pretendard Variable',
});

globalStyle('ol,ul', {
	listStyle: 'none',
});

globalStyle('html , body', {
	height: '100%',
});
