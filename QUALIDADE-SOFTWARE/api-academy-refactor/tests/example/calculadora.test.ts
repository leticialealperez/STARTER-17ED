import { Calculadora } from './calculadora';

describe('Calculadora', () => {
  // Teste 1
  test('A classe calculadora deve existir', () => {
    const calculadora = new Calculadora();

    expect(calculadora).toBeInstanceOf(Calculadora);
  });

  // Teste 2
  test('Deve retornar 2 quando somado 1+1', () => {
    const calculadora = new Calculadora();

    const resultado = calculadora.somar(500, 250);

    expect(resultado).toBe(750);
  });

  // Teste 3
  test('Deve retornar 3 quando subtraido 5-2', () => {
    const calculadora = new Calculadora();

    const resultado = calculadora.subtrair(5, 2);

    expect(resultado).toBe(3);
  });

  // Teste 4
  test('Deve retornar 2 quando dividido 10/5', () => {
    const calculadora = new Calculadora();

    const resultado = calculadora.dividir(10, 5);

    expect(resultado).toBe(2);
  });

  // Teste 5
  test('Deve estourar um erro se dividir qualquer valor por 0', () => {
    const calculadora = new Calculadora();

    expect(() => calculadora.dividir(2, 0)).toThrow(
      'Não é possível dividir por zero',
    );
  });

  // Teste 6
  test('Deve retornar 6 quando multiplicado 2*3', () => {
    const calculadora = new Calculadora();

    const resultado = calculadora.multiplicar(2, 3);

    expect(resultado).toBe(6);
  });
});
