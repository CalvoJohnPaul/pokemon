import {sva} from '@/styled-system/css';
import {fieldAnatomy} from '@ark-ui/react';

export const fieldRecipe = sva({
	slots: fieldAnatomy.keys(),
	base: {
		input: {
			w: 'full',
			h: 14,
			px: 5,
			bg: 'neutral.800',
			display: 'block',
			fontSize: 'lg',
			_focus: {
				outline: '2px solid token(colors.neutral.500)',
				outlineOffset: '3px',
			},
			_placeholder: {
				color: 'neutral.600',
			},
		},
	},
});
