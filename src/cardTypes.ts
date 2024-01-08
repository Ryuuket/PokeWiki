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
                        <div class="flying">flying</div>
                    </div>
                `
                break;
            }
            case "poison": {
                divTypes += `
                    <div class="type">
                        <div class="poison">poison</div>
                    </div>
                `
                break;
            }
            case "ground": {
                divTypes += `
                    <div class="type">
                        <div class="ground">ground</div>
                    </div>
                `
                break;
            }
            case "rock": {
                divTypes += `
                    <div class="type">
                        <div class="rock">rock</div>
                    </div>
                `
                break;
            }
            case "bug": {
                divTypes += `
                    <div class="type">
                        <div class="bug">bug</div>
                    </div>
                `
                break;
            }
            case "ghost": {
                divTypes += `
                    <div class="type">
                        <div class="ghost">ghost</div>
                    </div>
                `
                break;
            }
            case "steel": {
                divTypes += `
                    <div class="type">
                        <div class="steel">steel</div>
                    </div>
                `
                break;
            }
            case "water": {
                divTypes += `
                    <div class="type">
                        <div class="water">water</div>
                    </div>
                `
                break;
            }
            case "fire": {
                divTypes += `
                    <div class="type">
                        <div class="fire">fire</div>
                    </div>
                `
                break;
            }
            case "grass": {
                divTypes += `
                    <div class="type">
                        <div class="grass">grass</div>
                    </div>
                `
                break;
            }
            case "electric": {
                divTypes += `
                    <div class="type">
                        <div class="electric">electric</div>
                    </div>
                `
                break;
            }
            case "psychic": {
                divTypes += `
                    <div class="type">
                        <div class="psychic">psychic</div>
                    </div>
                `
                break;
            }
            case "dragon": {
                divTypes += `
                    <div class="type">
                        <div class="dragon">dragon</div>
                    </div>
                `
                break;
            }
            case "ice": {
                divTypes += `
                    <div class="type">
                        <div class="ice">ice</div>
                    </div>
                `
                break;
            }
            case "dark": {
                divTypes += `
                    <div class="type">
                        <div class="dark">dark</div>
                    </div>
                `
                break;
            }
            case "fairy": {
                divTypes += `
                    <div class="type">
                        <div class="fairy">fairy</div>
                    </div>
                `
                break;
            }
            case "shadow": {
                divTypes += `
                    <div class="type">
                        <div class="shadow">shadow</div>
                    </div>
                `
                break;
            }
            default: {
                divTypes += `
                    <div class="type">
                        <div class="uknown">uknown</div>
                    </div>
                `
                break;
            }
        }
    });
    return divTypes + `</div>`;
}