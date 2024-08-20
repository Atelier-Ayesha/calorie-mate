import { colors } from '@/style/colors/colors';
import { fonts } from '@/style/fonts/fonts';
import styled from '@emotion/styled';

export const Title = styled.p`
	${fonts.medium20}
	color: ${colors.text};
`;

export const Desc = styled.p`
	${fonts.light14}
	color: ${colors.text};
	white-space: pre-wrap;
`;

export const FlexCol = styled.div`
	display: flex;
	flex-direction: column;
`;
