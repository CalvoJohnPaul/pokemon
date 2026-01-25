'use client';

import {createStyleContext} from '@/styled-system/jsx';
import {Pagination} from '@ark-ui/react';
import {paginationRecipe} from './Pagination.recipe';

const {withContext, withProvider} = createStyleContext(paginationRecipe);

export const Root = withProvider(Pagination.Root, 'root');
export const Ellipsis = withContext(Pagination.Ellipsis, 'ellipsis');
export const FirstTrigger = withContext(Pagination.FirstTrigger, 'firstTrigger');
export const Item = withContext(Pagination.Item, 'item');
export const LastTrigger = withContext(Pagination.LastTrigger, 'lastTrigger');
export const NextTrigger = withContext(Pagination.NextTrigger, 'nextTrigger');
export const PrevTrigger = withContext(Pagination.PrevTrigger, 'prevTrigger');
export const Context = Pagination.Context;
