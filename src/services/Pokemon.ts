import {graphqlClient} from '@/config/graphqlClient';
import {getSdk} from '@/graphql';
import {uniqBy} from 'es-toolkit';
import {cache} from 'react';

export interface GetPokemonsInput {
	page: number;
	size: number;
	search: string;
	type: string[];
}

export const getPokemons = cache(async (input: GetPokemonsInput) => {
	const {size, page, search, type} = input;

	return await getSdk(graphqlClient).Pokemons({
		limit: size,
		offset: size * (page - 1),
		where: {
			...(search && {
				name: {
					_iregex: search,
				},
			}),
			...(type.length > 0 && {
				pokemon_v2_pokemontypes: {
					pokemon_v2_type: {
						name: {
							_in: type,
						},
					},
				},
			}),
		},
	});
});

export async function getPokemon(id: number) {
	const {pokemon} = await getSdk(graphqlClient).Pokemon({id});
	return pokemon ?? null;
}

export async function getPokemonImage(id: number): Promise<string | null> {
	const {sprites} = await getSdk(graphqlClient).PokemonSprites({id});
	return sprites.at(0)?.sprite?.other?.dream_world?.front_default ?? null;
}

export async function getPokemonResistanceAndWeakness(types: number[]) {
	const promises = types.map(async (type) => {
		try {
			const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
			const data = await response.json();

			return {
				resistance: [
					...data.damage_relations.double_damage_to,
					...data.damage_relations.half_damage_from,
					...data.damage_relations.no_damage_from,
				],
				weaknesses: [
					...data.damage_relations.double_damage_from,
					...data.damage_relations.half_damage_to,
					...data.damage_relations.no_damage_to,
				],
			};
		} catch {
			return {
				resistance: [],
				weaknesses: [],
			};
		}
	});

	const responses = await Promise.allSettled(promises);

	const resistanceAndWeaknesses = responses.reduce<{
		resistance: {name: string; url: string}[];
		weaknesses: {name: string; url: string}[];
	}>(
		(obj, res) => {
			if (res.status === 'rejected') return obj;

			return {
				resistance: [...obj.resistance, ...res.value.resistance],
				weaknesses: [...obj.weaknesses, ...res.value.weaknesses],
			};
		},
		{
			resistance: [],
			weaknesses: [],
		},
	);

	return {
		resistance: uniqBy(resistanceAndWeaknesses.resistance, (v) => v.name),
		weaknesses: uniqBy(resistanceAndWeaknesses.weaknesses, (v) => v.name),
	};
}
