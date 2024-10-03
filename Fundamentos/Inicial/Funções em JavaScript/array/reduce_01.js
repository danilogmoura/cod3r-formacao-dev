const carrinho = [
    { nome: 'Caneta', quantidade: 10, preco: 7.99 },
    { nome: 'Impressora', quantidade: 4, preco: 649.50 },
    { nome: 'Caderno', quantidade: 4, preco: 27.10 },
    { nome: 'Lápis', quantidade: 3, preco: 5.82 },
    { nome: 'Impressora', quantidade: 1, preco: 19.20 },
]

const totalCarrinho = (total, produto) => {
    console.log(total, produto)
    return total + (produto.quantidade * produto.preco)
}

console.log(carrinho.reduce(totalCarrinho, 0))