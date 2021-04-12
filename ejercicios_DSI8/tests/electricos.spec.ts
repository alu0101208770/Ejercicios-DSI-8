import 'mocha';
import {expect} from 'chai';
import {ElectricoCreator} from "../src/electricosCreator"
import {Electricos} from "../src/electricos"
let pikachu = new ElectricoCreator("Pikachu", ["0.4 m", "6.0 kg"], "electrico", 55, 40, 90, 35)

describe('Pruebas para la clase electrico', () => {
  it('Se puede instanciar un objeto de la clase electrico', () => {
    expect(pikachu).instanceOf(ElectricoCreator);
  });
});