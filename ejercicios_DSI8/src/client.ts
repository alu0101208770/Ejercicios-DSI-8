import {PokemonObjectCreator} from "./pokemonObjectCreator"
import {ElectricoCreator} from "./electricosCreator"
import {FuegoCreator} from "./fuegosCreator"

export function clientCode(pokemonObjectCreator: PokemonObjectCreator) {
  console.log(pokemonObjectCreator.logic());
}

clientCode(new ElectricoCreator("Pikachu", ["0.4 m", "6.0 kg"], "electrico", 55, 40, 90, 35));
clientCode(new FuegoCreator("Charmeleon", ["1.5 m", "32.0 kg"], "fuego", 75, 45, 93, 85));