import {PokemonObjectCreator} from "./pokemonObjectCreator"
import {PokemonObject} from "./pokemonObject"
import {Electricos} from "./electricos"

/**
 * Implementación concreta de la clase PokemonObjectCreator que 
 * devuelve objetos Electricos a través del método de fábrica.
 */
export class ElectricoCreator extends PokemonObjectCreator {
  constructor(public nombre: string, public peso_altura: string[], private tipo: string, 
    private ataque: number, private defensa: number, private velocidad: number, private hit_points: number) {
    super();
  }
  public factoryMethod(): PokemonObject {
    return new Electricos(this.nombre, this.peso_altura, this.tipo, this.ataque, this.defensa, this.velocidad, this.hit_points);
  }
}