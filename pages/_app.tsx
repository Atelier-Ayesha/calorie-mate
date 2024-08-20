import { globalStyles } from '@/style/globalstyle';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { AppProps } from 'next/app';

const cache = createCache({ key: 'next' });

const App = ({ Component, pageProps }: AppProps) => {
	console.log('웹훅 테스트');
	return (
		<CacheProvider value={cache}>
			{globalStyles}
			<Component {...pageProps} />
		</CacheProvider>
	);
};

export default App;
