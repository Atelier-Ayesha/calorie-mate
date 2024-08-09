import { colors } from '@/style/colors/colors';
import { fonts } from '@/style/fonts/fonts';
import { css } from '@emotion/css';

const pageTitle = css`
	font-family: 'Pretendard';
	${fonts.medium20}
	color: ${colors.text};
`;

const pageDesc = css`
	font-family: 'Pretendard';
	${fonts.light14}
	color: ${colors.text};
	white-space: pre-wrap;
`;

const styles = {
	pageTitle,
	pageDesc,
};

export default styles;
