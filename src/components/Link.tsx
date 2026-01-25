'use client';

import {css, cx} from '@/styled-system/css';
import type {SystemStyleObject} from '@/styled-system/types';
import Primitive, {type LinkProps} from 'next/link';
import {usePathname} from 'next/navigation';
import {forwardRef, type ReactNode} from 'react';

export const Link = forwardRef<
	HTMLAnchorElement,
	Omit<SystemStyleObject, 'href'> & LinkProps & {className?: string; children?: ReactNode}
>(function Link(props, ref) {
	const pathname = usePathname();
	const selected = removeTrailingSlash(props.href.toString()) === removeTrailingSlash(pathname);

	const {href, replace, scroll, prefetch, onNavigate, children, className, ...rest} = props;

	return (
		<Primitive
			ref={ref}
			data-selected={selected ? '' : undefined}
			href={href}
			replace={replace}
			scroll={scroll}
			prefetch={prefetch}
			onNavigate={onNavigate}
			className={cx(className, css(rest))}
		>
			{children}
		</Primitive>
	);
});

function removeTrailingSlash(subject: string) {
	return subject.replace(/\/+$/, '');
}
