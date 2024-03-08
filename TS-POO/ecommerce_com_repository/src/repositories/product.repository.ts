import { ProductRepository } from '../contracts/product-repository.contract';
import { products } from '../databases/products.database';
import { Product } from '../models/product';

export class ProductsRepositoryInMemory implements ProductRepository {

    public create(newProduto: Product): void {
        products.push(newProduto);
    };

    public getById(id: string): Product {
        const productFound = products.find((product) => product.id === id);

        if(!productFound) {
            throw Error('Produto não encontrado')
        }

        return productFound
    }

}