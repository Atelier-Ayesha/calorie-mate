import { AppProps } from 'next/app';
import '@/style/global.css';
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
import { config } from '@/config';

export default function App({ Component, pageProps }: AppProps) {
	//Todo google login
	return (
		// <GoogleOAuthProvider clientId={config?.googleId}>
		<Component {...pageProps} />
		// </GoogleOAuthProvider>
	);
}
