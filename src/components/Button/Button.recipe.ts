import {cva} from '@/styled-system/css';

export const buttonRecipe = cva({
	base: {
		h: 14,
		bg: 'neutral.800',
		minW: 14,
		cursor: 'pointer',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		transition: 'transform token(durations.slow)',
		_focusVisible: {
			outline: '2px solid token(colors.neutral.500)',
			outlineOffset: '3px',
		},
		_active: {
			transform: 'scale(0.95)',
		},
	},
});
