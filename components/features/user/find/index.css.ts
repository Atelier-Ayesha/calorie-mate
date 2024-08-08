import { fonts } from '@/style/fonts/fonts';
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
	${fonts.medium20}
	color: #252525;
`;

const pageDesc = css`
	font-family: 'Pretendard';
	${fonts.light14}
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
