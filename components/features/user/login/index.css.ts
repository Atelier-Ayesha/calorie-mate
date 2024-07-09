import { style } from '@vanilla-extract/css';

const wrapper = style({
	display: 'flex',
	flexDirection: 'column',
});

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

const findPasswordButton = style({
	background: 'none',
	fontFamily: 'Pretendard',
	fontWeight: 400,
	fontSize: '12px',
	lineHeight: '16px',
	color: '#7F7F7F',
	cursor: 'pointer',
	border: 'none',
	outline: 'none',
});

const styles = {
	form,
	button,
	findPasswordButton,
};

export default styles;
