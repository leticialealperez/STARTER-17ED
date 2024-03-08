import { randomUUID } from 'crypto';
import { Product } from './product';
import { User } from './user';

export class Comment {
    private _id: string = randomUUID();

    constructor(
        private _from: User,
        private _product: Product,
        public content: string
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