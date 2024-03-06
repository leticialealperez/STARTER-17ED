export class Motor {
    constructor(
        private _potencia: string
    ) {}

    public get potencia() : string {
        return this._potencia
    }
    
}