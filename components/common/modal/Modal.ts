import { colors } from '@/style/colors/colors';
import { fonts } from '@/style/fonts/fonts';
import styled from '@emotion/styled';

export const Overlay = styled.div`
	width: 100%;
	height: 100vh;
	background-color: ${colors.overlay};
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	z-index: 10;
	top: 0;
`;

export const Container = styled.div`
	background-color: ${colors.white};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	border: none;
	border-radius: 8px;
	height: auto;
	width: calc(100% - 60px);
	max-width: 300px;
	padding: 24px 16px;
	position: absolute;
	z-index: 20;
`;

export const ModalHeader = styled.header`
	height: 2px;
	width: 200px;
	position: relative;
	border-radius: 8px;
	display: flex;
	justify-content: center;
	margin: 8px 0;
`;

export const IconArea = styled.div`
	position: absolute;
	z-index: 5;
	top: -11px;
	border-radius: 50%;
	background: white;
	height: 24px;
	width: 24px;
`;

export const Title = styled.p`
	${fonts.semibold20}
	font-family: "Pretendard";
	color: ${colors.text};
	margin: 8px 0;
`;

export const Content = styled.div`
	${fonts.light14}
	font-family: "Pretendard";
	color: ${colors.text};
	margin: 12px 0;
`;

export const ButtonArea = styled.div`
	display: flex;
	width: 100%;
	gap: 16px;
	margin-top: 20px;
`;
