'use client';
import { InputHTMLAttributes } from 'react';
import { input } from './Input.style';

export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
	return <input className={input} {...props} />;
}
