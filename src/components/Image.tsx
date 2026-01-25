'use client';

import {css, cx} from '@/styled-system/css';
import type {Assign, SystemStyleObject} from '@/styled-system/types';
import Primitive, {type ImageProps} from 'next/image';
import {forwardRef, useEffect, useState} from 'react';

export const Image = forwardRef<
	HTMLImageElement,
	Assign<SystemStyleObject, ImageProps> & {fallbackSrc?: string; className?: string}
>(function Image(props, ref) {
	const {
		src,
		alt,
		width,
		height,
		fill,
		loader,
		sizes,
		quality,
		preload,
		placeholder,
		style,
		onLoadingComplete,
		onLoad,
		onError,
		loading,
		blurDataURL,
		unoptimized,
		overrideSrc,
		decoding,
		fallbackSrc,
		className,
		...rest
	} = props;

	const [error, setError] = useState(false);

	// biome-ignore lint/correctness/useExhaustiveDependencies: ""
	useEffect(() => {
		setError(false);
	}, [src]);

	return (
		<Primitive
			ref={ref}
			src={!fallbackSrc ? src : error ? fallbackSrc : src}
			alt={alt}
			width={width}
			height={height}
			fill={fill}
			loader={loader}
			sizes={sizes}
			quality={quality}
			preload={preload}
			placeholder={placeholder}
			style={style}
			onLoadingComplete={onLoadingComplete}
			onLoad={onLoad}
			loading={loading}
			blurDataURL={blurDataURL}
			unoptimized={unoptimized}
			overrideSrc={overrideSrc}
			decoding={decoding}
			onError={(e) => {
				setError(true);
				onError?.(e);
			}}
			className={cx(className, css(rest))}
		/>
	);
});
