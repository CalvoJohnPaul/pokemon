import {sva} from '@/styled-system/css';
import {progressAnatomy} from '@ark-ui/react';

export const progressRecipe = sva({
	slots: progressAnatomy.keys(),
	base: {
		root: {
			display: 'flex',
			alignItems: 'center',
			gap: 2,
		},
		label: {
			color: 'neutral.400',
		},
		valueText: {
			color: 'neutral.300',
			fontSize: 'xs',
			lineHeight: 'none',
		},
		track: {
			h: 1,
			bg: 'neutral.700',
			pos: 'relative',
			rounded: 'full',
			flexGrow: 1,
		},
		range: {
			w: 0,
			h: 'full',
			bg: 'orange.500',
			pos: 'absolute',
			top: '0',
			left: '0',
			rounded: 'full',
			transitionProperty: 'all',
			transitionDuration: 'slow',
		},
	},
});
