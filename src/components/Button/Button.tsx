'use client';

import {styled} from '@/styled-system/jsx';
import {ark} from '@ark-ui/react';
import {buttonRecipe} from './Button.recipe';

export const Button = styled(ark.button, buttonRecipe, {
	defaultProps: {
		type: 'button',
	},
});
