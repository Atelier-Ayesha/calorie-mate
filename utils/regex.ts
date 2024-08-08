export const emailRegExp = new RegExp(
	'/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,4}$/i'
);

export const passwordRegExp = new RegExp(
	/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{8,20}$/
);

export const nickNameRegExp = new RegExp(/^[a-zA-Z0-9]{2,14}$/);
