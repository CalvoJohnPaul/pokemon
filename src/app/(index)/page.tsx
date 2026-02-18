import {Button} from '@/components/Button';
import {Field} from '@/components/Field';
import {Icon} from '@/components/Icon';
import {Image} from '@/components/Image';
import {Link} from '@/components/Link';
import type {GetPokemonsInput} from '@/services/Pokemon';
import {getPokemons} from '@/services/Pokemon';
import {css} from '@/styled-system/css';
import {Box, Flex, Grid, styled, VisuallyHidden} from '@/styled-system/jsx';
import {capitalize} from '@/utils/capitalize';
import {clamp} from 'es-toolkit';
import {SearchIcon} from 'lucide-react';
import Form from 'next/form';
import {Suspense} from 'react';
import * as z from 'zod';
import {Pagination} from './Pagination';
import {TypeFilter} from './TypeFilter';

interface Props {
	searchParams: Promise<{[key: string]: unknown}>;
}

export default async function Page(props: Props) {
	const input = z.parse(GetPokemonsInputDefinition, await props.searchParams);

	return (
		<>
			<Filter {...input} />
			<Box
				mt={{
					base: 4,
					lg: 12,
				}}
				color="neutral.300"
				fontSize="sm"
				fontStyle="italic"
			>
				<Suspense fallback="Showing 0-0 of 0">
					<Summary {...input} />
				</Suspense>
			</Box>
			<Box mt={4}>
				<Suspense fallback={<PokemonsLoader size={input.size} />}>
					<Pokemons {...input} />
				</Suspense>
			</Box>
			<Suspense fallback={null}>
				<PageControl {...input} />
			</Suspense>
		</>
	);
}

async function Summary(props: GetPokemonsInput) {
	const data = await getPokemons(props);

	const count = data.details.aggregate?.count ?? 0;
	const start = 1 + (props.page - 1) * props.size;
	const until = clamp(props.page * props.size, props.size, count);

	return `Showing ${start}-${until} of ${count}`;
}

async function Pokemons(props: GetPokemonsInput) {
	const data = await getPokemons(props);

	return (
		<Grid
			gridTemplateColumns={{
				lg: 'repeat(auto-fill,minmax(14rem,1fr))',
			}}
			gap={{
				base: 3,
				lg: 5,
			}}
		>
			{data.pokemons.map((pokemon) => {
				const sprite = pokemon.sprites.at(0)?.sprites ?? {};
				const image = sprite.other?.dream_world?.front_default ?? '';

				return (
					<Link
						key={pokemon.id}
						href={`/${pokemon.id}`}
						bg="neutral.800"
						py={6}
						transition="transform token(durations.slow)"
						_active={{
							transform: 'scale(0.95)',
						}}
						_focusVisible={{
							outline: '2px solid token(colors.neutral.500)',
							outlineOffset: '3px',
						}}
					>
						<Box px={6}>
							<Box
								bg="neutral.700"
								w="full"
								px={6}
								rounded="full"
								display="flex"
								alignItems="center"
								justifyContent="center"
								aspectRatio={1}
							>
								<Image
									src={image}
									alt=""
									width={400}
									height={400}
									h="auto"
									maxH="full"
									maxW="full"
									fallbackSrc="/pokemon-ball.png"
								/>
							</Box>
						</Box>
						<Box px={6} mt={5}>
							<styled.h2 fontSize="2xl" lineHeight="none" truncate>
								{capitalize(pokemon.name, {delimiter: '-'})}
							</styled.h2>

							<styled.ul mt={2} display="flex" gap={2} flexWrap="wrap" fontSize="sm">
								{pokemon.types
									.filter((obj) => obj.type)
									.slice(0, 2)
									.map(({id, type}) => {
										if (!type) return null;

										return (
											<styled.li key={id} bg="neutral.700" px={2.5} py={0.5} rounded="full">
												{type.name}
											</styled.li>
										);
									})}
							</styled.ul>
						</Box>
					</Link>
				);
			})}
		</Grid>
	);
}

async function PokemonsLoader({size}: {size: number}) {
	return (
		<Grid
			gridTemplateColumns={{
				lg: 'repeat(auto-fill,minmax(14rem,1fr))',
			}}
			gap={{
				base: 3,
				lg: 5,
			}}
		>
			{Array.from({length: size}).map((_, index) => (
				<Box key={index} bg="neutral.800" p={6}>
					<Box
						bg="neutral.700"
						w="full"
						px={6}
						rounded="full"
						display="flex"
						alignItems="center"
						justifyContent="center"
						aspectRatio={1}
						animation="pulse"
					/>

					<Flex mt={6} flexDir="column" gap={2}>
						<Box h={6} w="1/2" bg="neutral.700" rounded="full" animation="pulse" />
						<Box h={5} w={16} bg="neutral.700" rounded="full" animation="pulse" />
					</Flex>
				</Box>
			))}
		</Grid>
	);
}

async function Filter(props: GetPokemonsInput) {
	return (
		<Form
			action="/"
			className={css({
				display: 'flex',
				alignItems: 'center',
				flexWrap: {base: 'wrap', lg: 'nowrap'},
				columnGap: {base: 0, lg: 4},
				rowGap: {base: 3, lg: 4},
			})}
		>
			<Field.Root flexGrow={1}>
				<Field.Input
					name="search"
					defaultValue={props.search}
					placeholder="Enter keyword"
					flexGrow={1}
				/>
			</Field.Root>
			<TypeFilter defaultValue={props.type} />
			<Button type="submit" variant="solid" ml={{base: 3, lg: 0}} flexShrink={0}>
				<Icon w={6} h={6} asChild>
					<SearchIcon />
				</Icon>
				<VisuallyHidden>Search</VisuallyHidden>
			</Button>
		</Form>
	);
}

async function PageControl(props: GetPokemonsInput) {
	const data = await getPokemons(props);

	return (
		<Pagination page={props.page} size={props.size} count={data.details.aggregate?.count ?? 0} />
	);
}

const GetPokemonsInputDefinition = z
	.object({
		page: z
			.string()
			.optional()
			.nullable()
			.transform((v) => {
				if (v == null) return 1;
				const n = Number.parseInt(v);
				if (Number.isNaN(v)) return 1;
				if (n < 1) return 1;
				return n;
			}),
		size: z
			.string()
			.optional()
			.nullable()
			.transform((v) => {
				if (v == null) return 24;
				const n = Number.parseInt(v);
				if (Number.isNaN(v)) return 24;
				if (n < 24 || n > 24 * 5) return 24;
				return n;
			}),
		search: z
			.string()
			.trim()
			.optional()
			.nullable()
			.transform((v) => v ?? ''),
		type: z
			.union([z.array(z.string()), z.string()])
			.optional()
			.nullable()
			.transform((v) => {
				if (v == null) return [];
				return Array.isArray(v) ? v : [v];
			}),
	})
	.optional()
	.nullable()
	.transform(
		(v) =>
			v ?? {
				page: 1,
				size: 12,
				search: '',
				type: [],
			},
	);
