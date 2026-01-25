import {sva} from '@/styled-system/css';
import {selectAnatomy} from '@ark-ui/react';

export const selectRecipe = sva({
	slots: selectAnatomy.keys(),
	base: {
		clearTrigger: {
			color: 'neutral.400',
		},
		content: {
			py: 2,
			bg: 'neutral.700',
			zIndex: 'modal',
			overflowY: 'auto',
			_focusVisible: {
				outline: '2px solid token(colors.neutral.500)',
				outlineOffset: '3px',
			},
		},
		control: {
			h: 14,
			w: 'full',
			bg: 'neutral.800',
			display: 'flex',
		},
		indicator: {
			color: 'neutral.400',
			transition: 'transform token(durations.slow)',
			_open: {
				transform: 'rotate(180deg)',
			},
		},
		item: {
			px: 4,
			py: 2,
			cursor: 'default',
			display: 'flex',
			alignItems: 'center',
			transition: 'background token(durations.slow)',
			_highlighted: {
				bg: 'neutral.600',
			},
		},
		itemIndicator: {
			color: 'neutral.400',
		},
		itemText: {
			flexGrow: 1,
			display: 'flex',
			alignItems: 'center',
			gap: 2,
		},
		trigger: {
			h: 'full',
			px: 5,
			display: 'flex',
			alignItems: 'center',
			textAlign: 'left',
			flexGrow: 1,
			_focus: {
				outline: '2px solid token(colors.neutral.500)',
				outlineOffset: '3px',
			},
			_placeholderShown: {
				color: 'neutral.600',
			},
		},
	},
});
