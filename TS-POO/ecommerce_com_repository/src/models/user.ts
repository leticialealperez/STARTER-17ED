import { randomUUID } from 'crypto';
import { Product } from './product';

export class User {
    private _id: string = randomUUID();
    private _cart: Product[] = [];

    constructor(
        public name: string,
        public username: string,
        public email: string,
    ) {

    }

    public get id() : string {
        return this._id
    }


    public addToCart(product: Product): void {
        this._cart.push(product);
    }

    public removeFromCart(product: Product): void {
        const index = this._cart.findIndex((value) => value.id === product.id);

        if(index === -1) {
            throw Error('Produto não encontrado')
        }

        this._cart.splice(index, 1);
    }


    public showProducts(): void {
        console.log(`\n\n\n${this.name}\n`)
        const total = this._cart.reduce((sum, product) => {
            product.show();

            return sum += product.value
        }, 0);

        console.log(`Total: R$ ${total.toFixed(2).replace('.', ",")}`)
    }
}

