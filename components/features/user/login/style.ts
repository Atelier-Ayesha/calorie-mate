import { colors } from '@/style/colors/colors';
import { fonts } from '@/style/fonts/fonts';
import styled from '@emotion/styled';

export const FindPasswordButton = styled.button`
	background: none;
	cursor: pointer;
	border: none;
	outline: none;
	margin-top: 16px;
	color: ${colors.textLighten};
	${fonts.light12}
`;

export const BottomBox = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 16px;
	justify-content: center;
	align-items: center;
	margin-top: auto;
	margin-bottom: 24px;
	gap: 8px;
	color: ${colors.textLighten};
	${fonts.light12}
`;

export const RowBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 32px;
	margin-bottom: 8px;
`;

export const OauthButton = styled.button`
	height: 32px;
	width: 32px;
	border-radius: 100%;
	border: none;
	outline: none;
	padding: 0px;
	margin: 0px;
	cursor: pointer;
`;
