const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: false },
    { nome: 'Impressora', qtde: 5, preco: 1000, fragil: true },
    { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false },
    { nome: 'iPad', qtde: 2, preco: 7500, fragil: true },
    { nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false },
    { nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: false },
    { nome: 'Computador', qtde: 2, preco: 5000, fragil: true }
];

// 5000 + 15000 + 10000 = 30000 / 3 = 10000

// filter, map, reduce

// 1. fragil: true (filter)
// 2. qtde * preco -> total (map)
// 3. media total (reduce)

const produtoFragil = produto => produto.fragil
const precoTotal = produto => produto.preco * produto.qtde

// const media = (acumulador, valor) => {
//     console.log(acumulador)

//     const qtde = acumulador.qtde + 1
//     const total = acumulador.total + valor
//     return { qtde, total, media: total / qtde }
// }

const media = (acumulador, valor, indice, array) => {
    console.log(acumulador, valor, indice, array)

    const qtdeElementos = array.length
    const ultimo = qtdeElementos - 1 === indice
    const novoTotal = acumulador + valor

    return ultimo ? novoTotal / qtdeElementos : novoTotal
}

const valorFinal = carrinho
    .filter(produtoFragil)
    .map(precoTotal)
    .reduce(media)

console.log(valorFinal)
