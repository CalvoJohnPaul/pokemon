import {getPokemon} from '@/services/Pokemon';
import {Box, Divider, Flex, HStack} from '@/styled-system/jsx';
import {capitalize} from '@/utils/capitalize';
import {notFound} from 'next/navigation';

interface Props {
	params: Promise<{id: string}>;
}

export default async function Page(props: Props) {
	const params = await props.params;
	const pokemon = await getPokemon(parseInt(params.id));

	if (!pokemon) return notFound();

	return (
		<>
			<Box>{pokemon.specy?.flavorTexts.map((obj) => obj.flavorText).join()}</Box>
			<HStack
				mt={{
					base: 5,
					lg: 8,
				}}
				w="fit"
				bg="neutral.800"
				px={{
					base: 5,
					lg: 8,
				}}
				py={{
					base: 5,
					lg: 6,
				}}
				gap={{
					base: 6,
					lg: 8,
				}}
			>
				<Box>
					<Box fontSize="xs" color="neutral.400">
						Weight
					</Box>
					<Box>{pokemon.weight ?? 0} KG</Box>
				</Box>
				<Divider orientation="vertical" h={8} color="neutral.700" />
				<Box>
					<Box fontSize="xs" color="neutral.400">
						Height
					</Box>
					<Box>{pokemon.height ?? 0} M</Box>
				</Box>
			</HStack>

			<Flex
				w={{
					lg: 'fit',
				}}
				mt={{
					base: 5,
					lg: 8,
				}}
				bg="neutral.800"
				px={{
					base: 5,
					lg: 8,
				}}
				py={{
					base: 5,
					lg: 6,
				}}
				gap={{
					base: 4,
					lg: 8,
				}}
				flexDir={{
					base: 'column',
					lg: 'row',
				}}
			>
				<Box>
					<Box fontSize="xs" color="neutral.400">
						Gender
					</Box>
					<Box>
						{(pokemon.specy?.genderRate ?? 0) * 10}% {getGender(pokemon.specy?.genderRate ?? 0)}
					</Box>
				</Box>
				<Divider
					orientation="vertical"
					h={8}
					color="neutral.700"
					display={{
						base: 'none',
						lg: 'block',
					}}
				/>
				<Box>
					<Box fontSize="xs" color="neutral.400">
						Egg Group
					</Box>
					<HStack gap={1}>
						{pokemon.specy?.eggroups
							.map((group) => group.egggroup?.name)
							.map((name) => capitalize(name ?? ''))
							.filter(Boolean)
							.join(', ')}
					</HStack>
				</Box>
				<Divider
					orientation="vertical"
					h={8}
					color="neutral.700"
					display={{
						base: 'none',
						lg: 'block',
					}}
				/>
				<Box>
					<Box fontSize="xs" color="neutral.400">
						Egg Cycle
					</Box>
					<Box>{pokemon.specy?.hatchCounter ?? 0}</Box>
				</Box>
			</Flex>
		</>
	);
}

function getGender(genderRate: number) {
	if (genderRate >= 8) return 'Female';
	if (genderRate >= 1) return 'Male';
	return 'Genderless';
}
