import Router from 'next/router';
import React, { Component, ErrorInfo } from 'react';

interface Props {
	children: React.ReactNode;
}

interface State {
	hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = { hasError: false };
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error('Uncaught Error: ', error, errorInfo);
		this.setState({ hasError: true });
	}

	render() {
		if (this.state.hasError) {
			Router.push('/404');
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
