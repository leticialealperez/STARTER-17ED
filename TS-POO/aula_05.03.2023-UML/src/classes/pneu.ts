export class Pneu {
    constructor(
        private _aro: number,
        private _marca: string
    ) {}

    public get aro() : number {
        return this._aro
    }

    public get marca() : string {
        return this._marca
    }
    
}