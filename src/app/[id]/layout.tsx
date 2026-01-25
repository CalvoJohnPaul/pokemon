import {Icon} from '@/components/Icon/Icon';
import {Image} from '@/components/Image';
import {Link} from '@/components/Link';
import {getPokemon} from '@/services/Pokemon';
import {Box, Flex, styled} from '@/styled-system/jsx';
import {capitalize} from '@/utils/capitalize';
import {
	BarChart2Icon,
	ChevronRightIcon,
	LightbulbIcon,
	Rotate3DIcon,
	ShieldIcon,
} from 'lucide-react';
import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {type PropsWithChildren, Suspense} from 'react';
import {CurrentPageLabel} from './CurrentPageLabel';
import {RecentlyViewed} from './RecentlyViewed';

interface Props {
	params: Promise<{id: string}>;
}

export async function generateMetadata(props: Props): Promise<Metadata> {
	const params = await props.params;
	const pokemon = await getPokemon(parseInt(params.id));

	if (!pokemon) return {};

	const sprite = pokemon.sprites.at(0)?.sprites ?? {};
	const image = sprite.other?.dream_world?.front_default ?? '';

	const title = capitalize(pokemon.name, {delimiter: '-'});
	const description = pokemon.specy?.flavorTexts.map((obj) => obj.flavorText).join();

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			images: [image],
		},
	};
}

export default async function Layout(props: PropsWithChildren<Props>) {
	const params = await props.params;
	const id = parseInt(params.id);

	if (Number.isNaN(id)) return notFound();

	return (
		<>
			<Suspense fallback={<NavbarLoader />}>
				<Navbar id={id} />
			</Suspense>

			<Flex
				mt={{
					lg: 16,
				}}
				gap={{
					base: 5,
					lg: 16,
				}}
				direction={{
					base: 'column',
					lg: 'row',
				}}
			>
				<Box
					w={{
						lg: '20rem',
					}}
					flexShrink={0}
				>
					<Suspense fallback={<PokemonAvatarLoader />}>
						<PokemonAvatar id={id} />
					</Suspense>

					<Box
						mt={8}
						display={{
							base: 'none',
							lg: 'block',
						}}
					>
						<Suspense fallback={null}>
							<RecentlyViewed id={id} />
						</Suspense>
					</Box>
				</Box>

				<Box flexGrow={1}>
					<Suspense fallback={<PokemonDetailsLoader />}>
						<PokemonDetails id={id} />
					</Suspense>

					<styled.nav
						mt={{
							base: 8,
							lg: 12,
						}}
					>
						<styled.ul
							display="grid"
							gridTemplateColumns={{
								lg: 'repeat(4,1fr)',
							}}
							gap={{
								base: 3,
								lg: 5,
							}}
						>
							{links.map(({path, label, icon}) => (
								<styled.li key={path} w="full">
									<Link
										href={`/${id}${path}`}
										w="full"
										px={4}
										py={3}
										bg="neutral.800"
										display="flex"
										alignItems="center"
										gap={2.5}
										transition="transform, background"
										transitionDuration="slow"
										_active={{
											transform: 'scale(0.95)',
										}}
										_selected={{
											bg: 'orange.500',
											color: 'orange.100',
										}}
										_focusVisible={{
											outline: '2px solid token(colors.neutral.500)',
											outlineOffset: '3px',
										}}
									>
										<Icon w={5} h={5} pointerEvents="none" asChild>
											{icon}
										</Icon>

										{label}
									</Link>
								</styled.li>
							))}
						</styled.ul>
					</styled.nav>

					<Box
						mt={{
							base: 8,
							lg: 12,
						}}
					>
						{props.children}
					</Box>
				</Box>
			</Flex>
		</>
	);
}

const links = [
	{
		icon: <LightbulbIcon />,
		label: 'About',
		path: '/',
	},
	{
		icon: <BarChart2Icon />,
		label: 'Statistics',
		path: '/statistics',
	},
	{
		icon: <Rotate3DIcon />,
		label: 'Evolutions',
		path: '/evolutions',
	},
	{
		icon: <ShieldIcon />,
		label: 'Moves',
		path: '/moves',
	},
];

async function Navbar({id}: {id: number}) {
	const pokemon = await getPokemon(id);

	if (!pokemon) return null;

	return (
		<styled.nav
			display={{
				base: 'none',
				lg: 'flex',
			}}
			alignItems="center"
			listStyle="none"
			gap="3"
		>
			<styled.ol display="contents">
				<styled.li>
					<Link href="/">Pokemons</Link>
				</styled.li>
				<styled.li color="neutral.600">
					<Icon asChild>
						<ChevronRightIcon />
					</Icon>
				</styled.li>
				<styled.li>
					<Link href={`/${pokemon.id}`}>{capitalize(pokemon.name, {delimiter: '-'})}</Link>
				</styled.li>
				<styled.li color="neutral.600">
					<Icon asChild>
						<ChevronRightIcon />
					</Icon>
				</styled.li>
				<styled.li>
					<CurrentPageLabel />
				</styled.li>
			</styled.ol>
		</styled.nav>
	);
}

function NavbarLoader() {
	return (
		<styled.nav
			display={{
				base: 'none',
				lg: 'flex',
			}}
			alignItems="center"
			listStyle="none"
			gap="3"
		>
			<styled.ol display="contents">
				<styled.li>
					<Link href="/">Pokemons</Link>
				</styled.li>
				<styled.li color="neutral.600">
					<Icon asChild>
						<ChevronRightIcon />
					</Icon>
				</styled.li>
				<styled.li>
					<Box h={3} w={16} bg="neutral.800" rounded="full" animation="pulse" />
				</styled.li>
			</styled.ol>
		</styled.nav>
	);
}

async function PokemonAvatar({id}: {id: number}) {
	const pokemon = await getPokemon(id);

	if (!pokemon) return notFound();

	const sprite = pokemon.sprites.at(0)?.sprites ?? {};
	const image = sprite.other?.dream_world?.front_default ?? '';

	return (
		<styled.div
			css={{
				h: '24rem',
				w: 'full',
				p: 8,
				bg: 'neutral.800',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				aspectRatio: 1,
			}}
		>
			<Image
				src={image}
				alt=""
				width={600}
				height={600}
				h="auto"
				maxH="full"
				maxW="full"
				fallbackSrc="/pokemon-ball.png"
			/>
		</styled.div>
	);
}

function PokemonAvatarLoader() {
	return (
		<styled.div
			css={{
				h: '24rem',
				w: 'full',
				p: 8,
				bg: 'neutral.800',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				aspectRatio: 1,
				animation: 'pulse',
			}}
		/>
	);
}

async function PokemonDetails({id}: {id: number}) {
	const pokemon = await getPokemon(id);

	if (!pokemon) return null;

	return (
		<>
			<styled.h1
				css={{
					fontSize: {
						base: '3xl',
						lg: '4xl',
					},
					fontWeight: 'bold',
					lineHeight: 'none',
				}}
			>
				{capitalize(pokemon.name, {delimiter: '-'})}
			</styled.h1>

			<Flex mt={4} gap={3}>
				{pokemon.types
					.filter((obj) => Boolean(obj.type))
					.map((obj) => (
						<styled.div
							key={obj.id}
							css={{
								bg: 'neutral.800',
								px: 4,
								py: 1,
								display: 'inline-block',
								rounded: 'full',
							}}
						>
							{obj.type?.name}
						</styled.div>
					))}
			</Flex>
		</>
	);
}

function PokemonDetailsLoader() {
	return (
		<>
			<styled.h1
				css={{
					fontSize: {
						base: '3xl',
						lg: '4xl',
					},
					fontWeight: 'bold',
					lineHeight: 'none',
				}}
			>
				Pokemon
			</styled.h1>
			<Box mt={4}>
				<styled.div
					css={{
						bg: 'neutral.800',
						px: 4,
						py: 1,
						display: 'inline-block',
						rounded: 'full',
					}}
				>
					Unknown
				</styled.div>
			</Box>
		</>
	);
}
