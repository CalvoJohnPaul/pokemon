import {Progress} from '@/components/Progress';
import {getPokemon, getPokemonResistanceAndWeakness} from '@/services/Pokemon';
import {Box, styled, VStack} from '@/styled-system/jsx';
import {capitalize} from '@/utils/capitalize';
import {notFound} from 'next/navigation';

export default async function Statistics(props: {params: Promise<{id: string}>}) {
	const params = await props.params;
	const pokemon = await getPokemon(parseInt(params.id));

	if (!pokemon) return notFound();

	const elements = pokemon.types.map((obj) => obj.type?.id).filter(Boolean) as number[];

	const {resistance, weaknesses} = await getPokemonResistanceAndWeakness(elements);

	return (
		<>
			<VStack
				alignItems="stretch"
				gap={3}
				bg="neutral.800"
				p={{
					base: 5,
					lg: 8,
				}}
			>
				{pokemon.stats.map((obj) => {
					if (!obj.stat) return null;

					return (
						<Progress.Root key={obj.id} value={obj.base} min={0} max={100}>
							<Progress.Track>
								<Progress.Range />
							</Progress.Track>
							<Progress.Label w={8} textAlign="left">
								{formatStat(obj.stat.name)}
							</Progress.Label>
						</Progress.Root>
					);
				})}
			</VStack>

			<Box
				mt={{
					base: 4,
					lg: 10,
				}}
				bg="neutral.800"
				p={{
					base: 5,
					lg: 8,
				}}
			>
				<Box>Weakness</Box>

				<styled.ul mt={4} display="flex" flexWrap="wrap" gap={2}>
					{weaknesses.map(({name}) => (
						<styled.li key={name} px={3} py={1} bg="neutral.700" fontSize="sm" rounded="full">
							{capitalize(name)}
						</styled.li>
					))}
				</styled.ul>
			</Box>

			<Box
				mt={{
					base: 4,
					lg: 10,
				}}
				bg="neutral.800"
				p={8}
			>
				<Box>Resistance</Box>

				<styled.ul mt={4} display="flex" flexWrap="wrap" gap={2}>
					{resistance.map(({name}) => (
						<styled.li key={name} px={3} py={1} bg="neutral.700" fontSize="sm" rounded="full">
							{capitalize(name)}
						</styled.li>
					))}
				</styled.ul>
			</Box>
		</>
	);
}

function formatStat(stat: string) {
	switch (stat) {
		case 'hp':
			return 'HP';
		case 'attack':
			return 'ATK';
		case 'defense':
			return 'DEF';
		case 'special-attack':
			return 'SATK';
		case 'special-defense':
			return 'SDEF';
		case 'speed':
			return 'SPD';
		default:
			return stat;
	}
}
