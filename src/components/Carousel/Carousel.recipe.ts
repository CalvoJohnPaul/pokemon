import {sva} from '@/styled-system/css';
import {carouselAnatomy} from '@ark-ui/react';

export const carouselRecipe = sva({
	slots: carouselAnatomy.keys(),
});
