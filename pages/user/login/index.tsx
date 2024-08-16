import dynamic from 'next/dynamic';

const LoginRoot = dynamic(() => import('@/components/features/user/login'), {
	loading: () => <p>Loading...</p>,
	ssr: false,
});

export default function LoginPage() {
	return <LoginRoot />;
}
