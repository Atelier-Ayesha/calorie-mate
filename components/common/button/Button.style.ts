import { fonts } from '@/style/fonts/fonts';
import styled from '@emotion/styled';

export const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 44px;
	border-radius: 4px;
	border: none;
	outline: none;
	cursor: pointer;
	${fonts.semibold16};
`;

// variants: {
// 	color: {
// 		primary: { backgroundColor: #A35ADD; color: #FFFFFF },
// 		secondary: {
// 			backgroundColor: #7024AD;
// 			color: #FFFFFF;
// 		},
// 		tertiay: { backgroundColor: #C699EA; color: #FFFFFF },
// 		quarternary: {
// 			backgroundColor: #E9D8F7;
// 			color: ${colors.text};
// 		},
// 		border: {
// 			backgroundColor: #FFFFFF;
// 			border: 1px solid #C1C1C1;
// 			color: ${colors.text};
// 		},
// 		invalid: { backgroundColor: #C1C1C1; color: #ffffff },
// 		cancel: { backgroundColor: #FFFFFF; color: ${colors.text} },
// 	},
// },
