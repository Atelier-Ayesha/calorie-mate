import { fonts } from '@/style/fonts/fonts';
import { css } from '@emotion/css';

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
	pageTitle,
	pageDesc,
};

export default styles;
