import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

export default defineConfig({
	// plugins: [react()],
	build: {
		outDir: 'dist',
		target: 'esnext',
	},
	preview: {
		port: 3030,
		strictPort: true,
		host: '0.0.0.0', 
		allowedHosts: true,
	},
	server: {
		allowedHosts: true
	},
});