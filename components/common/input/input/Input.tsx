import {
	ChangeEvent,
	Children,
	PropsWithChildren,
	createContext,
	useContext,
} from 'react';

type InputContextProps = {
	name: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	value: string | number;
	type: 'password' | 'text' | 'number' | 'email';
};

//<{}> => 어떠한 객체든 들어올수 있다.
type InputProps = InputContextProps & PropsWithChildren<{}>;

const InputContext = createContext<InputContextProps>({
	name: '',
	onChange: () => {},
	type: 'text',
	value: '',
});

const useInputContext = () => {
	return useContext(InputContext);
};

const InputWrapper = (props: InputProps) => {
	const { name, onChange, value, type, children } = props;

	const inputProviderValue: InputContextProps = {
		name,
		onChange,
		value,
		type,
	};

	return (
		<InputContext.Provider value={inputProviderValue}>
			{children}
		</InputContext.Provider>
	);
};

const Input = ({ ...props }) => {
	const { name, onChange, value, type } = useInputContext();
	return <input name={name} onChange={onChange} value={value} type={type} />;
};

const Label = ({ children, ...props }: PropsWithChildren<{}>) => {
	const { name } = useInputContext();

	return <label htmlFor={name}>{children}</label>;
};

InputWrapper.Input = Input;
InputWrapper.Label = Label;

export default InputWrapper;
