import { colors } from '@/style/colors/colors';
import { fonts } from '@/style/fonts/fonts';
import { css } from '@emotion/css';

export const label = css`
	display: flex;
	flex-direction: column;
	font-family: 'Pretendard';
	color: ${colors.text};
	gap: 8px;
	${fonts.medium12}
`;
