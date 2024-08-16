import { colors } from '@/style/colors/colors';
import styled from '@emotion/styled';

export const Wrapper = styled.header`
	position: fixed;
	width: 100%;
	height: 84px;
	top: 0;
`;

export const TopBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 72px;
	color: ${colors.white};
	background-color: ${colors.secondary};
	padding-left: 20px;
	padding-right: 20px;
`;

export const Triangle = styled.div`
	width: 0;
	height: 0;
	border-top: 12px solid ${colors.secondary};
	border-left: 100vw solid transparent;
	filter: drop-shadow(0px 4px 4px ${colors.overlay});
`;
