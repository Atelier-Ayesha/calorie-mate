import { css } from '@emotion/css';

export const wrapper = css`
	position: fixed;
	width: 100%;
	height: 84px;
	top: 0;
`;

export const topBox = css`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 72px;
	color: #fff;
	background-color: #7024ad;
	padding-left: 20px;
	padding-right: 20px;
`;

export const triangle = css`
	width: 0;
	height: 0;
	border-top: 12px solid #7024ad;
	border-left: 100vw solid transparent;
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const backArea = css`
	width: 36px;
`;

export const title = css``;

export const menuArea = css`
	margin: 16px 16px 16px 0;
`;
