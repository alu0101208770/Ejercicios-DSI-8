import { PokemonObject } from "./pokemonObject";

/**
 * Clase que almacena información de pokemon de tipo electrico
 */
 export class Electricos implements PokemonObject{
  constructor(public nombre: string, public peso_altura: string[], private tipo: string = "electrico", 
    private ataque: number, private defensa: number, private velocidad: number, private hit_points: number) {
  }

  /**
   * Metodo que retorna el nombre del pokemon
   * @returns Nombre del pokemon
   */
  getName() {
    return this.nombre;
  }

  /**
   * Metodo que retorna el tipo del pokemon
   * @returns tipo del pokemon
   */
  getTipo() {
    return this.tipo;
  }

  /**
   * Metodo que retorna el ataque del pokemon
   * @returns ataque del pokemon
   */
  getAtaque() {
    return this.ataque;
  }

  /**
   * Metodo que retorna la defensa del pokemon
   * @returns defensa del pokemon
   */
  getDefensa() {
    return this.defensa;
  }

  /**
   * Metodo que retorna la velocidad del pokemon
   * @returns velocidad del pokemon
   */
  getVelocidad() {
    return this.velocidad;
  }

  /**
   * Metodo que retorna el HP del pokemon
   * @returns HP del pokemon
   */
  getHP() {
    return this.hit_points;
  }
}