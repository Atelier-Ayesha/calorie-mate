import InputWrapper from '@/components/common/input/input/Input';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>calorie-mate</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>

			<main>
				칼로리 메이트
				<InputWrapper
					name='아아'
					onChange={() => {}}
					value='이히힝'
					type='text'
				>
					<InputWrapper.Label>
						이히힝
						<InputWrapper.Input />
					</InputWrapper.Label>
				</InputWrapper>
			</main>
		</>
	);
}
