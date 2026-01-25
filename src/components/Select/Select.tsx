'use client';

import {createStyleContext} from '@/styled-system/jsx';
import {type CollectionItem, Select} from '@ark-ui/react';
import {selectRecipe} from './Select.recipe';

const {withContext, withProvider} = createStyleContext(selectRecipe);

export const Root = withProvider(Select.Root<CollectionItem>, 'root');
export const ClearTrigger = withContext(Select.ClearTrigger, 'clearTrigger');
export const Content = withContext(Select.Content, 'content');
export const Control = withContext(Select.Control, 'control');
export const Indicator = withContext(Select.Indicator, 'indicator');
export const Item = withContext(Select.Item, 'item');
export const ItemGroup = withContext(Select.ItemGroup, 'itemGroup');
export const ItemGroupLabel = withContext(
	Select.ItemGroupLabel,
	'itemGroupLabel',
);
export const ItemIndicator = withContext(Select.ItemIndicator, 'itemIndicator');
export const ItemText = withContext(Select.ItemText, 'itemText');
export const Label = withContext(Select.Label, 'label');
export const List = withContext(Select.List, 'list');
export const Positioner = withContext(Select.Positioner, 'positioner');
export const Trigger = withContext(Select.Trigger, 'trigger');
export const ValueText = withContext(Select.ValueText, 'valueText');
export const HiddenSelect = Select.HiddenSelect;
export const Context = Select.Context;
export const ItemContext = Select.ItemContext;
