import { fonts } from '@/style/fonts/fonts';
import { css } from '@emotion/css';

export const overlay = css`
	width: 100%;
	height: 100vh;
	background-color: #0000004d;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	z-index: 10;
	top: 0;
`;

export const container = css`
	background-color: #ffffff;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	border: none;
	border-radius: 8px;
	height: auto;
	width: calc(100% - 60px);
	max-width: 300px;
	padding: 24px 16px;
	position: absolute;
	z-index: 20;
`;

export const modalHeader = css`
	height: 2px;
	width: 200px;
	position: relative;
	border-radius: 8px;
	display: flex;
	justify-content: center;
	margin: 8px 0;
`;

// variants: {
// 	color: {
// 		alert: { background-color: #C80000 },
// 		confirm: { background-color: #5DAE48 },
// 		info: { background-color: #4285F4 },
// 	},
// },

export const iconArea = css`
	position: absolute;
	z-index: 5;
	top: -11px;
	border-radius: 50%;
	background: white;
	height: 24px;
	width: 24px;
`;

export const title = css`
	${fonts.semibold20}
	font-family: "Pretendard";
	color: #252525;
	margin: 8px 0;
`;

export const content = css`
	${fonts.light14}
	font-family: "Pretendard";
	color: #252525;
	margin: 12px 0;
`;

export const buttonArea = css`
	display: flex;
	width: 100%;
	gap: 16px;
	margin-top: 20px;
`;
