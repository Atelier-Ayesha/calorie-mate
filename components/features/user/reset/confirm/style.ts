import { colors } from '@/style/colors/colors';
import { fonts } from '@/style/fonts/fonts';
import styled from "@emotion/styled"

export const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	margin-top: 108px;
	padding: 0 16px;
	gap: 20px;
`;

export const Title = styled.h2`
	${fonts.medium20}
	color: ${colors.text};
`;

export const Desc = styled.p`
	${fonts.light14}
	color: ${colors.text};
	white-space: pre-wrap;
`;

