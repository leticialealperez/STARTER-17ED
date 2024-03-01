/*

    POLIMORFISMO 
    É a capacidade de alterar o comportamento de determinado método de uma classe pai (Super Classe) em qualquer uma das classes filhas (Sub Classes) que à herdem.

    Polimorfismo => O termo polimorfismo é originário do grego e significa "muitas formas"

    Beleza, mas como?
    1 - Utilizando o termo "implements"
    A palavra chave implements é usada em uma declaração de classe para definir um "contrato" de funcionalidades.

*/

abstract class Pagamento {
    public efetivar(): void {}
}

// interface Pagamento {
//     efetivar: () => void;
// }

class PagamentoCredito implements Pagamento{
    public efetivar(): void {
        // Estabelecer comunicação com a OPERADORA
        // COMO VAI SER FEITO?
    }

}


class PagamentoDinheiro implements Pagamento {
    public efetivar(): void {
        // Botar no bolso do patrão 
    }
}


class PagamentoPix implements Pagamento {
    public efetivar(): void {
        // Solicitar comprovante da transferencia
    }
}



