import {PokemonObject} from "./pokemonObject"

export abstract class PokemonObjectCreator {
  public abstract factoryMethod(): PokemonObject;
  public logic(): string {
    const twoDimensionalFigure = this.factoryMethod();
    return `Yo soy ${twoDimensionalFigure.getName()}, ` +
           `soy de tipo ${twoDimensionalFigure.getTipo()} y ` +
           `mi valor de ataque es ${twoDimensionalFigure.getAtaque()}`;
  }
}