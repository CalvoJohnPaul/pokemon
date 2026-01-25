import {sva} from '@/styled-system/css';
import {token} from '@/styled-system/tokens';
import {tooltipAnatomy} from '@ark-ui/react';

export const tooltipRecipe = sva({
	slots: tooltipAnatomy.keys(),
	base: {
		trigger: {
			cursor: 'pointer',
		},
		content: {
			px: 4,
			py: 2,
			bg: 'neutral.600',
			color: 'neutral.300',
			zIndex: 'tooltip',
			rounded: 'md',
			fontSize: 'sm',
		},
		arrow: {
			'--arrow-size': token('sizes.3'),
			'--arrow-background': token('colors.neutral.600'),
		},
	},
});
