import './scss/styles.scss';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app/app.tsx';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container!);

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
