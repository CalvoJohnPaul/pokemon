'use client';

import {styled} from '@/styled-system/jsx';
import {ark} from '@ark-ui/react';
import {iconRecipe} from './Icon.recipe';

export const Icon = styled(ark.svg, iconRecipe, {
	defaultProps: {
		strokeWidth: 1.66667,
	},
	shouldForwardProp(key) {
		return ['strokeWidth'].includes(key);
	},
});
