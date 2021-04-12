import {PokemonObjectCreator} from "./pokemonObjectCreator"
import {PokemonObject} from "./pokemonObject"
import {Fuegos} from "./fuegos"

/**
 * Implementación concreta de la clase PokemonObjectCreator que 
 * devuelve objetos Fuegos a través del método de fábrica.
 */
export class FuegoCreator extends PokemonObjectCreator {
  constructor(public nombre: string, public peso_altura: string[], private tipo: string, 
    private ataque: number, private defensa: number, private velocidad: number, private hit_points: number) {
    super();
  }
  public factoryMethod(): PokemonObject {
    return new Fuegos(this.nombre, this.peso_altura, this.tipo, this.ataque, this.defensa, this.velocidad, this.hit_points);
  }
}