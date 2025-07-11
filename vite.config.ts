import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	assetsInclude: ['**/*.ttf'],
	resolve: {
		alias: {
			'@components': '/src/components/',
			'@ui': '/src/components/ui/',
		},
	},
	server: {
		host: '0.0.0.0',
	},
});
