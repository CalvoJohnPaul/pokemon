'use client';

import {createStyleContext} from '@/styled-system/jsx';
import {Progress} from '@ark-ui/react';
import {progressRecipe} from './Progress.recipe';

const {withContext, withProvider} = createStyleContext(progressRecipe);

export const Root = withProvider(Progress.Root, 'root');
export const Circle = withContext(Progress.Circle, 'circle');
export const CircleRange = withContext(Progress.CircleRange, 'circleRange');
export const CircleTrack = withContext(Progress.CircleTrack, 'circleTrack');
export const Label = withContext(Progress.Label, 'label');
export const Range = withContext(Progress.Range, 'range');
export const Track = withContext(Progress.Track, 'track');
export const ValueText = withContext(Progress.ValueText, 'valueText');
export const View = withContext(Progress.View, 'view');
export const Context = Progress.Context;
