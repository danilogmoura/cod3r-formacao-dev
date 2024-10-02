const produto = {
    nome: 'Mackbook',
    preco: 32000,
    desconto: 0.5,
    precoComDesconto: function() { // Método!
        return this.preco * (this.preco / 100 * this.desconto)
    }
}

console.log(produto.preco)
console.log(produto.precoComDesconto())
