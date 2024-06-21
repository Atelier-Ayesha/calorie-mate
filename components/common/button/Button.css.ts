import { fonts } from '@/style/fonts/fonts';
import { vars } from '@/style/theme/theme.css';
import { recipe } from '@vanilla-extract/recipes';

export const button = recipe({
	base: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: '44px',
		borderRadius: '4px',
		border: 'none',
		outline: 'none',
		cursor: 'pointer',
		...fonts.semibold16,
	},

	variants: {
		color: {
			primary: { backgroundColor: '#A35ADD', color: '#FFFFFF' },
			secondary: {
				backgroundColor: '#7024AD',
				color: '#FFFFFF',
			},
			tertiay: { backgroundColor: '#C699EA', color: '#FFFFFF' },
			quarternary: {
				backgroundColor: '#E9D8F7',
				color: '#252525',
			},
			invalid: { backgroundColor: '#C1C1C1', color: '#252525' },
			cancel: { backgroundColor: '#FFFFFF', color: '#252525' },
		},
	},
});
