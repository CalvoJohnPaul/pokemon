import {getPokemon} from '@/services/Pokemon';
import {Box, styled} from '@/styled-system/jsx';
import {capitalize} from '@/utils/capitalize';
import {notFound} from 'next/navigation';

export default async function Moves(props: {params: Promise<{id: string}>}) {
	const params = await props.params;
	const pokemon = await getPokemon(parseInt(params.id));

	if (!pokemon) return notFound();

	return (
		<>
			<Box
				bg="neutral.800"
				p={{
					base: 5,
					lg: 8,
				}}
			>
				<Box>Quick Moves</Box>

				<styled.ul mt={4} display="flex" gap={2}>
					{pokemon.abilities.map((obj) => {
						if (!obj.ability) return null;

						return (
							<styled.li
								key={obj.ability?.id}
								bg="neutral.700"
								fontSize="sm"
								rounded="full"
								px={3}
								py={1}
							>
								{capitalize(obj.ability.name, {delimiter: '-'})}
							</styled.li>
						);
					})}
				</styled.ul>
			</Box>

			<Box
				bg="neutral.800"
				p={{
					base: 5,
					lg: 8,
				}}
				mt={{
					base: 4,
					lg: 10,
				}}
			>
				<Box>Main Moves</Box>

				<styled.table
					css={{
						w: 'full',
						mt: 4,
						'& th': {
							textAlign: 'left',
							fontSize: 'sm',
							color: 'neutral.400',
							py: 1,
						},
						'& td': {
							py: 1,
							fontSize: 'sm',
							fontFamily: 'mono',
							fontVariantNumeric: 'tabular-nums',

							_first: {
								fontFamily: 'sans',
							},
						},
					}}
				>
					<styled.thead>
						<styled.tr>
							<styled.th>Move</styled.th>
							<styled.th>Damage</styled.th>
							<styled.th>DPS</styled.th>
							<styled.th>EPS</styled.th>
						</styled.tr>
					</styled.thead>
					<styled.tbody>
						{pokemon.moves.map((obj) => {
							if (!obj.move) return null;

							return (
								<styled.tr key={obj.id}>
									<styled.td>
										<styled.div
											bg="neutral.700"
											px={2.5}
											py={0.5}
											rounded="full"
											display="inline-block"
											fontSize="sm"
										>
											{capitalize(obj.move.name, {delimiter: '-'})}
										</styled.div>
									</styled.td>
									<styled.td>{obj.move.power}</styled.td>
									<styled.td>{obj.move.pp}</styled.td>
									<styled.td>{obj.move.pp}</styled.td>
								</styled.tr>
							);
						})}
					</styled.tbody>
				</styled.table>
			</Box>
		</>
	);
}
