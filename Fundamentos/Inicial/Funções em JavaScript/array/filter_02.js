const carrinho = [
    { nome: 'Caneta', quantidade: 10, preco: 7.99 },
    { nome: 'Impressora', quantidade: 0, preco: 649.50 },
    { nome: 'Caderno', quantidade: 4, preco: 27.10 },
    { nome: 'Lápis', quantidade: 0, preco: 5.82 },
    { nome: 'Impressora', quantidade: 1, preco: 19.20 },
]

const quantidadeMaiorZero = produto => produto.quantidade > 0
const apenasNome = produto => produto.nome

const carrinhoFinal = carrinho
    .filter(quantidadeMaiorZero)
    .map(apenasNome)

console.log(carrinhoFinal)