import { Pokemon } from "./models";

export function getTypes(pokemon: Pokemon): string{
    let divTypes: string = `
        <div class="types">
    `;
    pokemon.types.forEach(type => {
        switch(type.type.name){
            case "normal": {
                divTypes += `
                    <div class="type">
                        <p class="normal">normal</p>
                    </div>
                `
                break;
            }
            case "fighting": {
                divTypes += `
                    <div class="type">
                        <p class="fighting">fighting</p>
                    </div>
                `
                break;
            }
            case "flying": {
                divTypes += `
                    <div class="type">
                        <p class="flying">flying</p>
                    </div>
                `
                break;
            }
            case "poison": {
                divTypes += `
                    <div class="type">
                        <p class="poison">poison</p>
                    </div>
                `
                break;
            }
            case "ground": {
                divTypes += `
                    <div class="type">
                        <p class="ground">ground</p>
                    </div>
                `
                break;
            }
            case "rock": {
                divTypes += `
                    <div class="type">
                        <p class="rock">rock</p>
                    </div>
                `
                break;
            }
            case "bug": {
                divTypes += `
                    <div class="type">
                        <p class="bug">bug</p>
                    </div>
                `
                break;
            }
            case "ghost": {
                divTypes += `
                    <div class="type">
                        <p class="ghost">ghost</p>
                    </div>
                `
                break;
            }
            case "steel": {
                divTypes += `
                    <div class="type">
                        <p class="steel">steel</p>
                    </div>
                `
                break;
            }
            case "water": {
                divTypes += `
                    <div class="type">
                        <p class="water">water</p>
                    </div>
                `
                break;
            }
            case "fire": {
                divTypes += `
                    <div class="type">
                        <p class="fire">fire</p>
                    </div>
                `
                break;
            }
            case "grass": {
                divTypes += `
                    <div class="type">
                        <p class="grass">grass</p>
                    </div>
                `
                break;
            }
            case "electric": {
                divTypes += `
                    <div class="type">
                        <p class="electric">electric</p>
                    </div>
                `
                break;
            }
            case "psychic": {
                divTypes += `
                    <div class="type">
                        <p class="psychic">psychic</p>
                    </div>
                `
                break;
            }
            case "dragon": {
                divTypes += `
                    <div class="type">
                        <p class="dragon">dragon</p>
                    </div>
                `
                break;
            }
            case "ice": {
                divTypes += `
                    <div class="type">
                        <p class="ice">ice</p>
                    </div>
                `
                break;
            }
            case "dark": {
                divTypes += `
                    <div class="type">
                        <p class="dark">dark</p>
                    </div>
                `
                break;
            }
            case "fairy": {
                divTypes += `
                    <div class="type">
                        <p class="fairy">fairy</p>
                    </div>
                `
                break;
            }
            case "shadow": {
                divTypes += `
                    <div class="type">
                        <p class="shadow">shadow</p>
                    </div>
                `
                break;
            }
            default: {
                divTypes += `
                    <div class="type">
                        <p class="uknown">uknown</p>
                    </div>
                `
                break;
            }
        }
    });
    return divTypes + `</div>`;
}