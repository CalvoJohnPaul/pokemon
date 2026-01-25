import {sva} from '@/styled-system/css';
import type {SystemStyleObject} from '@/styled-system/types';
import {paginationAnatomy} from '@ark-ui/react';

const trigger: SystemStyleObject = {
	h: '12',
	w: '12',
	bg: 'neutral.800',
	color: 'neutral.300',
	cursor: 'pointer',
	fontWeight: 'bold',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	transition: 'transform token(durations.slow)',
	_active: {
		transform: 'scale(0.95)',
	},
	_disabled: {
		color: 'neutral.500',
		cursor: 'not-allowed',
		_active: {
			transform: 'scale(1)',
		},
	},
	_selected: {
		color: 'orange.500',
	},
	_focusVisible: {
		outline: '2px solid token(colors.neutral.500)',
		outlineOffset: '3px',
	},
};

export const paginationRecipe = sva({
	slots: paginationAnatomy.keys(),
	base: {
		root: {
			display: 'flex',
			justifyContent: 'center',
			gap: 2,
		},
		ellipsis: {
			h: 12,
			w: 12,
			bg: 'neutral.800',
			color: 'neutral.500',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
		item: trigger,
		lastTrigger: trigger,
		firstTrigger: trigger,
		nextTrigger: trigger,
		prevTrigger: trigger,
	},
});
