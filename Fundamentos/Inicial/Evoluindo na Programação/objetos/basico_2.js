function precoComDesconto(preco, desconto) { // Método!
    return preco * (1 - desconto)
}


const produto = {
    nome: 'Mackbook',
    preco: 32000,
    desconto: 0.05,
    precoComDesconto: function() { // Método!
        return this.preco * (1 - this.desconto)
    }
}

console.log(produto.preco)
console.log(produto.precoComDesconto())
console.log(precoComDesconto(produto.preco, produto.desconto))