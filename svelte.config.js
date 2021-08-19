import replace from '@rollup/plugin-replace'

/** @type {import('@sveltejs/kit').Config} */
export default {
	kit: {
		target: '#svelte',
		vite: {
			clearScreen: false,
			plugins: [
				replace({
					values: { __TEMPLATE__WRAPPER__SEGMENT__: '$lib' },
					include: ['src/**/*.*'],
					preventAssignment: true,
				}),
			],
		},
	},
}
