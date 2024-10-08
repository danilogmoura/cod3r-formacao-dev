const produto = {
    nome: 'Ipad',
    marca: 'Apple',
    anoFabricacao: 2023,
    preco: 7500,
    fragil: true,
    descontos: 0.15,
    precoComDesconto: function () {
        return (1 - this.descontos) * this.preco
    }
}

const precoFinal = produto.precoComDesconto()
console.log('R$', precoFinal)
console.log(`O ${produto.nome} tem preço R$${precoFinal}`)