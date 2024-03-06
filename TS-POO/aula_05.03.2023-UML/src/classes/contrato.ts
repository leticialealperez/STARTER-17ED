import { Carro } from './carro';

export interface Contrato {
    dirigir: (carro: Carro) => void
}