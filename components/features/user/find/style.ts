import { colors } from '@/style/colors/colors';
import { fonts } from '@/style/fonts/fonts';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 108px;
	padding: 0 16px;
`;

export const Description = styled.p`
	display: flex;
	flex-direction: column;
	gap: 12px;
`;

export const Title = styled.p`
	font-family: 'Pretendard';
	${fonts.medium20}
	color: ${colors.text};
`;

export const Desc = styled.p`
	font-family: 'Pretendard';
	${fonts.light14}
	color: ${colors.text};
	white-space: pre-wrap;
`;

export const FlexCol = styled.div`
	display: flex;
	flex-direction: column;
`;
