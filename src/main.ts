import './style.css'
import { listAllPokemons } from './list-all.ts'
import { Pokemon } from './models/Pokemon/pokemon.ts';
import { getTypes } from './cardTypes.ts';
// import { setupCounter } from './counter.ts'

async function createCards(): Promise<string> {
  let pokemons: string = "";
  let allPokemons: Pokemon[] = await listAllPokemons(0);
    allPokemons.forEach(pokemon => {
      pokemons += 
      `
        <figure class="card">
            <p class="name">${pokemon?.name}</p>
            <img class="imgPkmn" src='${pokemon?.sprites?.other?.["official-artwork"].front_default}'></img>
            ${getTypes(pokemon)}
        </figure>
      `
    });
  return pokemons;
}

console.log(await createCards())
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="cardList">
  ${await createCards()}
  </div>
`


//setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
