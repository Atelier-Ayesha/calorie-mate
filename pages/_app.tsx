import { AppProps } from 'next/app';
import '@/style/global.css';
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
import { config } from '@/config';
import globalStyle from '@/style/global.css';
import { Global } from '@emotion/react';

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
