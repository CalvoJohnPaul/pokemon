'use client';

import {capitalize} from '@/utils/capitalize';
import {useSelectedLayoutSegment} from 'next/navigation';

export function CurrentPageLabel() {
	const segment = useSelectedLayoutSegment();

	return <>{capitalize(segment ?? 'about')}</>;
}
