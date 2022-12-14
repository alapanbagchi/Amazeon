import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import path from 'path'
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter()
	},
	vite: {
		resolve: {
			alias: {
				$src: path.resolve('./src'),
				$lib: path.resolve('./src/lib'),
				$components: path.resolve('./src/components'),
				$stores: path.resolve('./src/stores'),
				$utils: path.resolve('./src/utils'),
			}
		}
	}
};

export default config;
