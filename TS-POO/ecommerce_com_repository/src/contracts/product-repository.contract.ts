import { Product } from '../models/product';

export interface ProductRepository {
    create: (newProduto: Product) => void;
    getById: (id: string) => Product;
}