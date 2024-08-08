import { fonts } from '@/style/fonts/fonts';
import { css } from '@emotion/css';

export const label = css`
	display: flex;
	flex-direction: column;
	font-family: 'Pretendard';
	color: #252525;
	gap: 8px;
	${{ ...fonts.medium12 }}
`;
