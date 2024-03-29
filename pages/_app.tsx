import { AppProps } from 'next/app';
import '@/style/global.css';

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
