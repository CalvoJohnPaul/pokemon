'use client';

import {Carousel} from '@/components/Carousel';
import {Icon} from '@/components/Icon/Icon';
import {Image} from '@/components/Image';
import {Link} from '@/components/Link';
import type {PokemonQuery} from '@/graphql';
import {css} from '@/styled-system/css';
import {Box} from '@/styled-system/jsx';
import {chunk, uniqBy} from 'es-toolkit';
import {ChevronLeftIcon, ChevronRightIcon} from 'lucide-react';
import {useLocalStorage, useTimeout} from 'usehooks-ts';
import * as z from 'zod';

type Pokemon = NonNullable<PokemonQuery['pokemon']>;

export function RecentlyViewed__client(props: {data: Pokemon}) {
	const [recentlyViewed, setRecentlyViewed] = useLocalStorage<Pokemon[]>('recentlyViewed', [], {
		serializer(data) {
			return JSON.stringify(uniqBy(data, (v) => v.id));
		},
		deserializer(value) {
			try {
				const v = JSON.parse(value);
				const l = z.array(z.record(z.string(), z.any())).parse(v) as Pokemon[];
				return uniqBy(l, (l) => l.id);
			} catch {
				return [];
			}
		},
	});

	useTimeout(() => {
		setRecentlyViewed((prev) => [...prev, props.data]);
	}, 1);

	if (recentlyViewed.length <= 0) return null;

	return (
		<Carousel.Root slideCount={recentlyViewed.length} display="flex" alignItems="center" gap={6}>
			<Carousel.Control>
				<Carousel.PrevTrigger className={button}>
					<Icon w={5} h={5} asChild>
						<ChevronLeftIcon />
					</Icon>
				</Carousel.PrevTrigger>
			</Carousel.Control>

			<Carousel.ItemGroup flexGrow={1}>
				{chunk(recentlyViewed, 6).map((pokemons, index) => (
					<Carousel.Item
						key={index}
						index={1}
						display="grid"
						gridTemplateRows={'repeat(2,1fr)'}
						gridTemplateColumns="repeat(3,1fr)"
						gap={3}
					>
						{pokemons.map((pokemon) => (
							<Thumbnail key={pokemon.id} data={pokemon} />
						))}
					</Carousel.Item>
				))}
			</Carousel.ItemGroup>

			<Carousel.Control>
				<Carousel.NextTrigger className={button}>
					<Icon w={5} h={5} asChild>
						<ChevronRightIcon />
					</Icon>
				</Carousel.NextTrigger>
			</Carousel.Control>
		</Carousel.Root>
	);
}

function Thumbnail({data}: {data: NonNullable<PokemonQuery['pokemon']>}) {
	const sprite = data.sprites.at(0)?.sprites ?? {};
	const image = sprite.other?.dream_world?.front_default ?? '';

	return (
		<Link href={`/${data.id}`} display="block" bg="neutral.800" p={2}>
			<Box display="flex" alignItems="center" justifyContent="center" aspectRatio={1}>
				<Image
					src={image}
					alt=""
					width={150}
					height={150}
					h="auto"
					maxH="full"
					maxW="full"
					fallbackSrc="/pokemon-ball.png"
				/>
			</Box>
		</Link>
	);
}

const button = css({
	w: 8,
	h: 8,
	color: 'neutral.500',
	border: '1px solid token(colors.neutral.500)',
	cursor: 'pointer',
	rounded: 'full',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	transition: 'transform token(durations.slow)',
	_active: {
		transform: 'scale(0.95)',
	},
	_disabled: {
		cursor: 'not-allowed',
		_active: {
			transform: 'none',
		},
	},
});
