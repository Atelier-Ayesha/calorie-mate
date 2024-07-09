import { style } from '@vanilla-extract/css';

const form = style({
	display: 'flex',
	flexDirection: 'column',
	marginTop: '108px',
	padding: '0 16px',
	gap: '20px',
});

const button = style({
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

const styles = {
	form,
	button,
};

export default styles;
