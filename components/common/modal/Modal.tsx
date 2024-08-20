import React, {
	PropsWithChildren,
	createContext,
	useContext,
	useState,
} from 'react';
import * as S from './Modal';
import Portal from './Portal';
import { Button } from '../button/Button';

// !TODO: 추후 모달 전역 store 추가에 따라 Props 반드시 변경해야함.
type ModalContextProps = {
	modalType: 'alert' | 'info' | 'confirm';
	setModalType: () => void;
};

type ModalProps = ModalContextProps & PropsWithChildren<{}>;

const ModalContext = createContext<ModalContextProps>({
	modalType: 'info',
	setModalType: () => {},
});

const useModalContext = () => {
	return useContext(ModalContext);
};

export const ModalProvider = (props: PropsWithChildren<{}>) => {
	const { children } = props;

	return (
		<ModalContext.Provider
			value={{ modalType: 'alert', setModalType: () => {} }}
		>
			{children}
		</ModalContext.Provider>
	);
};

/** Modal Element **/
// Modal
const Modal = (props: ModalProps) => {
	const { children } = props;

	return (
		<Portal container={document.body}>
			<S.Container>{children}</S.Container>
			<S.Overlay />
		</Portal>
	);
};

// Modal Title
export const Title = ({ children, ...props }: PropsWithChildren<{}>) => {
	return <S.Title>{children}</S.Title>;
};

// Modal Content
export const Content = ({ children, ...props }: PropsWithChildren<{}>) => {
	return <S.Content>{children}</S.Content>;
};

// Modal Button Area
export const ButtonArea = ({ children, ...props }: PropsWithChildren<{}>) => {
	return <S.ButtonArea>{children}</S.ButtonArea>;
};

// Modal.ModalHeader = ModalHeader;
Modal.Title = Title;
Modal.Content = Content;
Modal.ButtonArea = ButtonArea;
Modal.Button = Button;

export default Modal;
