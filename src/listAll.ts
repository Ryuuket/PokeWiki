import { Pokemon } from './models';

export interface listPokemonResponse {
    count: number,
    next: string,
    previous: string,
    results: [{
        name: string,
        url: string
    }]
}

export async function listAllPokemons(page: number): Promise<Pokemon[]>{
    const offset: number = page*60;
    try {
        const response: listPokemonResponse = await api(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=24`);
        const pokemons = await Promise.all(response.results.map(async (pokemonLink) => {
            if(pokemonLink.url != null){
                const pokemon: Pokemon = await api(pokemonLink.url);
                return pokemon;
            } 
        }));
        return pokemons.filter((pokemon):pokemon is Pokemon => pokemon !== undefined);
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error while fetching pokemons : ", error.message)
        }
        throw new Error('Error while fetching pokemons from PokeAPI. Please contact an administrator.');
    }
}

export function api<T>(url: string): Promise<T> {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response.json() as Promise<T>;
      })
      .then(data => {
            return data;
      })
  }