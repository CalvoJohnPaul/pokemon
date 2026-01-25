'use client';

import {createStyleContext} from '@/styled-system/jsx';
import {Tooltip} from '@ark-ui/react';
import {tooltipRecipe} from './Tooltip.recipe';

const {withContext, withRootProvider} = createStyleContext(tooltipRecipe);

export const Root = withRootProvider(Tooltip.Root);
export const Arrow = withContext(Tooltip.Arrow, 'arrow');
export const ArrowTip = withContext(Tooltip.ArrowTip, 'arrowTip');
export const Content = withContext(Tooltip.Content, 'content');
export const Positioner = withContext(Tooltip.Positioner, 'positioner');
export const Trigger = withContext(Tooltip.Trigger, 'trigger');
export const Context = Tooltip.Context;
