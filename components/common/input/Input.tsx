import { InputHTMLAttributes } from 'react';
import * as S from './Input.style';
import { FieldValues, ControllerRenderProps } from 'react-hook-form';

interface InputProps<T extends FieldValues>
	extends InputHTMLAttributes<HTMLInputElement> {
	field?: ControllerRenderProps<T, any>;
}

export default function Input<T extends FieldValues = FieldValues>({
	field,
	...props
}: InputProps<T>) {
	return <S.Input {...field} {...props} />;
}
