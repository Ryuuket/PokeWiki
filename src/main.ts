import './style.css'
import { listAllPokemons } from './listAll.ts'
import { Pokemon } from './models/Pokemon/pokemon.ts';
import { getTypes } from './cardTypes.ts';
import { renderHeader } from './header.ts';
import { filterList } from './filterList.ts';

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

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
${renderHeader()}
<div id="cardList">
${await createCards()}
</div>
`

const searchInput = document.querySelector('#search');

if(searchInput != null && searchInput instanceof HTMLInputElement) {
    let correspondingPokemons: Pokemon[];
    searchInput.addEventListener("keyup", async () => {
      if(searchInput.value.length < 2){
        document.querySelector<HTMLDivElement>('#cardList')!.innerHTML = `
          ${createCards()}
        `
      } else {
        document.querySelector<HTMLDivElement>('#cardList')!.innerHTML = ``;
        correspondingPokemons = await filterList(searchInput.value);
        correspondingPokemons.forEach((pokemon) => {
          document.querySelector<HTMLDivElement>('#cardList')!.innerHTML += (`
            <figure class="card">
              <p class="name">${pokemon?.name}</p>
              <img class="imgPkmn" src='${pokemon?.sprites?.other?.["official-artwork"].front_default}'></img>
              ${getTypes(pokemon)}
            </figure>
          `);
        });
      }
    });
}
