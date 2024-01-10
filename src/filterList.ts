import { Pokemon } from './models';
import { api, listPokemonResponse } from './listAll';
import { levenshtein } from './levenshtein';

export async function filterList(entry: string): Promise<Pokemon[]> {
    try {
        const response: listPokemonResponse = await api(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=2000`);
        const correspondingPokemon = await Promise.all(response.results.map(async pokemon => {
            if(levenshtein(pokemon.name.toLowerCase(), entry.toLowerCase()) < 4){
               return await api(pokemon.url) as Pokemon;
            }
        }));
        return correspondingPokemon.filter((pokemon): pokemon is Pokemon => pokemon !== undefined);
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error while fetching pokemons : ", error.message)
        }
        throw new Error('Error while fetching pokemons from PokeAPI. Please contact an administrator.');
    }
}