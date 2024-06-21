import { createTheme } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
	color: {
		primary: '#A35ADD',
		secondary: '#7024AD',
		tertiay: '#C699EA',
		quarternary: '#E9D8F7',
		invalid: '#C1C1C1',
		text: '#252525',
		white: '#FFFFFF',
	},
	font: {
		body: 'Pretendard',
	},
});
