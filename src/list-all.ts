import { Pokemon } from './models';

interface listPokemonResponse {
    count: number,
    next: string,
    previous: string,
    results: [{
        name: string,
        url: string
    }]
}

export async function listAllPokemons(page: number): Promise<Pokemon[]>{
    const offset: number = page*24;
    try {
        const response: listPokemonResponse = await api(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=151`);
        const pokemons = await Promise.all(response.results.map(async (pokemonLink) => {
            if(pokemonLink.url != null){
                const pokemon: Pokemon = await api(pokemonLink.url);
                console.log(pokemon);
                return pokemon;
            } 
        }));
        return pokemons.filter((pokemon):pokemon is Pokemon => pokemon !== undefined);
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error while fetching pokemons : ", error.message)
        }
        throw new Error('Error while fetching pokemons from PokeAPI. Please contact an administrator.');
        // Handle the error
    }
}

function api<T>(url: string): Promise<T> {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
       // console.log(response.json());
        return response.json() as Promise<T>;
      })
      .then(data => {
            return data;
      })
  }