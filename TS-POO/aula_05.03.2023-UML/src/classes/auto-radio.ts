export class AutoRadio {
    constructor(
        private _touchScreen: boolean,
        private _leitorCD: boolean,
        private _bluetooth: boolean,
        private _ligado: boolean = false
    ) {}


    public conectarBluetooth(): void {
        if(!this._ligado) {
            throw Error('Não é possível conectar o bluetooth com o equipamento desligado.');
        }

        console.log('Conectando bluetooth...')
    }

    public ligar(): void {
        this._ligado = true;

        console.log('Radio ON')
    }

    public desligar(): void {
        this._ligado = false;

        console.log('Radio OFF')
    }
}