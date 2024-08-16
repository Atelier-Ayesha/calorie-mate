import { colors } from '@/style/colors/colors';
import { fonts } from '@/style/fonts/fonts';
import { css } from '@emotion/css';
import styled from '@emotion/styled'

export const Input = styled.input`
	height: 44px;
	background: ${colors.input};
	padding: 12px 16px;
	border: 1px solid ${colors.text};
	border-radius: 4px;
	box-sizing: border-box;
	font-family: 'Pretendard';
	color: ${colors.text};
	${fonts.medium14};
`;
