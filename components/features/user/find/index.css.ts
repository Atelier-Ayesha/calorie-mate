import { css } from '@emotion/css';

const wrapper = css`
	display: flex;
	flex-direction: column;
	margin-top: 108px;
	padding: 0 16px;
`;

const description = css`
	display: flex;
	flex-direction: column;
	gap: 12px;
`;

const pageTitle = css`
	font-family: 'Pretendard';
	font-weight: 500;
	font-size: 20px;
	line-height: 24px;
	color: #252525;
`;

const pageDesc = css`
	font-family: 'Pretendard';
	font-weight: 300;
	font-size: 14px;
	line-height: 18px;
	color: #252525;
	white-space: pre-wrap;
`;

const styles = {
	wrapper,
	description,
	pageTitle,
	pageDesc,
};

export default styles;
