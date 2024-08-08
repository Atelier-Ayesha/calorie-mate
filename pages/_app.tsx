import { AppProps } from 'next/app';
import '@/style/global.css';
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
import { config } from '@/config';
import { Global } from '@emotion/react';
import globalStyle from '@/style/global.css';

export default function App({ Component, pageProps }: AppProps) {
	//Todo google login
	return (
		// <GoogleOAuthProvider clientId={config?.googleId}>
		<>
			<Global styles={globalStyle} />
			<Component {...pageProps} />
		</>
		// </GoogleOAuthProvider>
	);
}
