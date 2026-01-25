import {getPokemon} from '@/services/Pokemon';
import {RecentlyViewed__client} from './RecentlyViewed.client';

export async function RecentlyViewed({id}: {id: number}) {
	const pokemon = await getPokemon(id);

	if (!pokemon) return null;

	return <RecentlyViewed__client data={pokemon} />;
}
