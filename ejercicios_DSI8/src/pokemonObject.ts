/**
 * Interfaz que declara toda la funcionalidad común que concreta  
 * los objetos PokemonObject tienen que implementar
 */
export interface PokemonObject {
  getName(): string;
  getTipo(): string;
  getAtaque(): number;
}