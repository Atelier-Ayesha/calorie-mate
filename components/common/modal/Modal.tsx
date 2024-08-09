'use client';
import { AlertIcon, ConfirmIcon, InfoIcon } from '@/assets/icons/icons';
import React, {
	PropsWithChildren,
	createContext,
	useContext,
	useState,
} from 'react';
import {
	buttonArea,
	container,
	content,
	overlay,
	iconArea,
	modalHeader,
	title,
} from './Modal';
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
			<div className={container}>{children}</div>
			<div className={overlay} />
		</Portal>
	);
};

// Modal Header
export const ModalHeader = ({ ...props }: PropsWithChildren<{}>) => {
	const { modalType } = useModalContext();

	const headerIcon = {
		alert: <AlertIcon />,
		info: <InfoIcon />,
		confirm: <ConfirmIcon />,
	};

	return (
		<div className={modalHeader({ color: modalType })}>
			<div className={iconArea}>{headerIcon[modalType]}</div>
		</div>
	);
};

// Modal Title
export const Title = ({ children, ...props }: PropsWithChildren<{}>) => {
	return <h3 className={title}>{children}</h3>;
};

// Modal Content
export const Content = ({ children, ...props }: PropsWithChildren<{}>) => {
	return <p className={content}>{children}</p>;
};

// Modal Button Area
export const ButtonArea = ({ children, ...props }: PropsWithChildren<{}>) => {
	return <div className={buttonArea}>{children}</div>;
};

Modal.ModalHeader = ModalHeader;
Modal.Title = Title;
Modal.Content = Content;
Modal.ButtonArea = ButtonArea;
Modal.Button = Button;

export default Modal;
