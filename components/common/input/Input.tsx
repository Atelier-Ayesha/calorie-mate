import { InputHTMLAttributes } from 'react';
import { input } from './input.css';

export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
	return <input className={input} {...props} />;
}
