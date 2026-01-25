import {defineConfig} from '@pandacss/dev';

export default defineConfig({
	preflight: true,
	include: ['./src/**/*.{ts,tsx}'],
	exclude: [],
	theme: {
		extend: {
			tokens: {
				fonts: {
					sans: {
						value: 'var(--font-sans)',
					},
					mono: {
						value: 'var(--font-mono)',
					},
				},
				zIndex: {
					hide: {
						value: -1,
					},
					auto: {
						value: 'auto',
					},
					base: {
						value: 0,
					},
					docked: {
						value: 10,
					},
					dropdown: {
						value: 1000,
					},
					sticky: {
						value: 1100,
					},
					banner: {
						value: 1200,
					},
					overlay: {
						value: 1300,
					},
					modal: {
						value: 1400,
					},
					popover: {
						value: 1500,
					},
					skipLink: {
						value: 1600,
					},
					toast: {
						value: 1700,
					},
					tooltip: {
						value: 1800,
					},
				},
				spacing: {
					'1/4': {value: '25%'},
					'1/3': {value: '33.3333333333%'},
					'1/2': {value: '50%'},
					'2/3': {value: '66.6666666667%'},
					'3/4': {value: '75%'},
				},
			},
		},
	},
	outdir: 'styled-system',
	jsxFramework: 'react',
});
