import { randomUUID } from 'crypto';
import { Product } from './product';
import { User } from './user';

export type Rate = 1 | 2 | 3 | 4 | 5;

export class Rating {
    private _id: string = randomUUID();

    constructor(
        private _from: User,
        private _product: Product,
        public rate: Rate
    ) {}

    
    public get id() : string {
        return this._id
    }

    public get from() : User {
        return this._from
    }

    public get product() : Product {
        return this._product
    }
    
}