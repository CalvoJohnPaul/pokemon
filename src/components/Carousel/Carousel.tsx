'use client';

import {createStyleContext} from '@/styled-system/jsx';
import {Carousel} from '@ark-ui/react';
import {carouselRecipe} from './Carousel.recipe';

const {withContext, withProvider} = createStyleContext(carouselRecipe);

export const Root = withProvider(Carousel.Root, 'root');
export const AutoplayIndicator = withContext(
	Carousel.AutoplayIndicator,
	'autoplayIndicator',
);
export const AutoplayTrigger = withContext(
	Carousel.AutoplayTrigger,
	'autoplayTrigger',
);
export const Control = withContext(Carousel.Control, 'control');
export const Indicator = withContext(Carousel.Indicator, 'indicator');
export const IndicatorGroup = withContext(
	Carousel.IndicatorGroup,
	'indicatorGroup',
);
export const Item = withContext(Carousel.Item, 'item');
export const ItemGroup = withContext(Carousel.ItemGroup, 'itemGroup');
export const NextTrigger = withContext(Carousel.NextTrigger, 'nextTrigger');
export const PrevTrigger = withContext(Carousel.PrevTrigger, 'prevTrigger');
export const ProgressText = withContext(Carousel.ProgressText, 'progressText');
export const Context = Carousel.Context;
