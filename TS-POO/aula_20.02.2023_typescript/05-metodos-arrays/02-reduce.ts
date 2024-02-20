let precos: number[] = [50, 20, 100];

let somaPrecos = precos.reduce((soma, preco) => soma + preco, 0);
console.log(somaPrecos);