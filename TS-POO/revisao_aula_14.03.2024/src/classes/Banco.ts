/*

2. Implemente uma classe chamada “Banco” que represente uma instituição financeira. Essa classe deve conter métodos para cadastrar clientes, abrir contas bancárias e realizar operações como saques, depósitos e transferências.

*/

import { Cliente } from './Cliente';
import { Conta } from './Conta';

export class Banco {
    private _clientes: Array<Cliente> = [];
    private _contas: Array<Conta> = [];
    private _saques: Array<any> = [];
    private _depositos: Array<any> = [];
    private _transferencias: Array<any> = [];


    constructor(
        private _id: string,
        private _nome: string,
    ) {}

    
    public get id() : string {
        return this._id
    }

    public get nome() : string {
        return this._nome
    }

    public get clientes() : any[] {
        return this._clientes
    }

    public get contas() : any[] {
        return this._contas
    }

    public get saques() : any[] {
        return this._saques
    }

    public get depositos() : any[] {
        return this._depositos
    }

    public get transferencias() : any[] {
        return this._transferencias
    }
    
    public cadastrarCliente(novoCliente: Cliente): void {
        const existe = this._clientes.some((cliente) => cliente.documento === novoCliente.documento);

        if(existe) {
            throw Error('Já existe um cliente cadastrado com o documento informado.')
        }

        this.clientes.push(novoCliente)

    }

    public abrirConta(documento: string, tipoConta: 'CORRENTE' | 'POUPANCA'): void {
        const numeroConta = this.geraNumeroAleatorio(5);
        const agencia = this.geraNumeroAleatorio(3);
        const digitoVerificador = this.geraNumeroAleatorio(2);

        // precisa estar cadastrado como cliente
        const clienteEncontrado = this._clientes.find((cliente) => cliente.documento === documento);

        if(!clienteEncontrado) {
            throw Error('O documento ainda não foi cadastrado como cliente do banco')
        }

        // o cliente encontrado não pode ter 2 contas do mesmo tipo
        const existe = this._contas.some((conta) => conta.proprietario === clienteEncontrado && conta.tipo === tipoConta)

        if(existe) {
            throw Error(`Já existe uma conta ${tipoConta} cadastrada para este cliente.`)
        }

        const novaConta: Conta = new Conta(agencia, numeroConta, digitoVerificador, tipoConta, clienteEncontrado)
        this._contas.push(novaConta)
    }
    
    public realizarSaque(): void {}
    public realizarDeposito(): void {}
    public realizarTransferencia(): void {}

    private geraNumeroAleatorio(quantidade: number): string {
        return new Date()
                .getTime()
                .toString()
                .split('')
                .reverse()
                .slice(0, quantidade)
                .join("")
    } 
}