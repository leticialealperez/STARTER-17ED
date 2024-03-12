import { comments } from './databases/comments.database';
import { Product } from './models/product';
import { User } from './models/user';
import { ProductsRepositoryInMemory } from './repositories/product.repository';
import { UserRepositoryInMemory } from './repositories/users.repository';

const usersFeatures = new UserRepositoryInMemory();
const productsFeatures = new ProductsRepositoryInMemory();

// simular criação de usuarios
const joao: User = new User('Joao da Silva', 'joao', 'joao@gmail.com')
const maria: User = new User('Maria da Silva', 'maria', 'maria@gmail.com')

// simular criação de produtos
const calcaJeans: Product = new Product('Calça Jeans', 150)
const camisaBranca: Product = new Product('Camisa Branca', 200)
const jaqueta: Product = new Product('Jaqueta', 300)



// adicionar usuarios no banco de dados em memória
usersFeatures.create(joao)
usersFeatures.create(maria)


// adicionar produtos no banco de dados em memória
productsFeatures.create(calcaJeans);
productsFeatures.create(camisaBranca);
productsFeatures.create(jaqueta);


// adicionar produtos no carrinho do usuario
joao.addToCart(calcaJeans)
joao.addToCart(camisaBranca)
joao.addToCart(jaqueta)
maria.addToCart(calcaJeans)


// adicionar comentarios em um produto
calcaJeans.addComment('Preço justo', joao)
camisaBranca.addComment('Ficou apertada', joao)
jaqueta.addComment('Linda jaqueta, vale a pena', joao)
calcaJeans.addComment('Meu marido amou!', maria)


// adicionar avaliação em um produto
calcaJeans.addRating(5, joao)
camisaBranca.addRating(1, joao)
jaqueta.addRating(5, joao)
calcaJeans.addRating(4, maria)

calcaJeans.updateComment(comments[0].id, 'Um pouco acima do preço')

joao.showProducts()
maria.showProducts()

