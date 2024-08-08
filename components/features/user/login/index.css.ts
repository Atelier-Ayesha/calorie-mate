import { fonts } from '@/style/fonts/fonts';
import { css } from '@emotion/css';

const findPasswordButton = css`
	background: none;
	cursor: pointer;
	border: none;
	outline: none;
	margin-top: 16px;
	color: #7f7f7f;
	${{ ...fonts.light12 }}
`;

const bottomBox = css`
	display: flex;
	flex-direction: column;
	padding: 0 16px;
	justify-content: center;
	align-items: center;
	margin-top: auto;
	margin-bottom: 24px;
	gap: 8px;
	color: #7f7f7f;
	${{ ...fonts.light12 }};
`;

const rowBox = css`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 32px;
	margin-bottom: 8px;
`;

const oauthButton = css`
	height: 32px;
	width: 32px;
	border-radius: 100%;
	border: none;
	outline: none;
	padding: 0px;
	margin: 0px;
	cursor: pointer;
`;

const styles = {
	findPasswordButton,
	bottomBox,
	rowBox,
	oauthButton,
};

export default styles;
