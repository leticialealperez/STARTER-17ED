/*
    RELACIONAMENTOS ENTRE CLASSES
    1 - Herança    - Cria um relacionamento onde "X" é "Y"
    2 - Composição - Onde a classe que está contida na relação não pode existir sem a classe que a contém.
    3 - Associação - Onde é possível que uma classe exista mesmo que sua associação seja excluída.
    4 - Agregação  - Seu objetivo é mostrar que uma classe faz uso de outra para determinada ação.


    MULTIPLICIDADE
    Expressa a quantidade de ocorrências de uma classe em outra.
    Ajuda a entender se é um array ou um atributo único que a classe irá conter, além de entender se será opcional ou obrigatório.

*/

import { AutoRadio } from './classes/auto-radio';
import { Carro } from './classes/carro';
import { IngressoCamarote } from './classes/ingresso-camarote';
import { IngressoVip } from './classes/ingresso-vip';
import { Motor } from './classes/motor';
import { Motorista } from './classes/motorista';
import { Pneu } from './classes/pneu';

const vip: IngressoVip = new IngressoVip(100)
vip.imprimeValor();

const camarote: IngressoCamarote = new IngressoCamarote(100);
camarote.imprimeValor();


const joao: Motorista = new Motorista('Joao', '0000', 28, 'joao@teste.com', '51999', '555555', 'AB');

const autoRadio: AutoRadio = new AutoRadio(true, true, true);

const sandero: Carro = new Carro(
    'Renault',
    'Sandero',
    'Cinza',
    new Motor('102 cv'), 
    [new Pneu(14, 'Pirelli'), new Pneu(14, 'Goodyear'), new Pneu(14, 'Pirelli'), new Pneu(14, 'Goodyear'), new Pneu(14, 'Bridgestone')],
);

sandero.autoRadio = autoRadio;

joao.dirigir(sandero);


