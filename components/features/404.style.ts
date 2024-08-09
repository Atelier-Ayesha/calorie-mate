import { css } from '@emotion/css';

export const wrapper = css`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: center;
	padding: 0 16px;
`;

export const imageBox = css`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 120px 25px 48px;
`;

export const image = css`
	max-width: 300px;
`;

export const textBox = css`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 4px;
	margin: 24px 0 48px;
`;

const styles = {
	wrapper,
	imageBox,
	image,
	textBox,
};

export default styles;
