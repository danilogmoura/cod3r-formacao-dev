// Função construtora -> Produto
// nome, preco, desconto (0 -1)
// precoFinal

function Produto(nome, preco, desconto = 0) {
    this.nome = nome
    this.preco = preco
    this.desconto = desconto

    this.precoFinal = function () {
        return (1 - this.desconto) * preco
    }
}

// Criar duas instâncias de produto
const produto1 = new Produto('Notebook', 3000, 0.15)
const produto2 = new Produto('Smartphone', 2000, 0.10)

console.log(`${produto1.nome} de ${produto1.preco} por ${produto1.precoFinal()}`)
console.log(`${produto2.nome} de ${produto2.preco} por ${produto2.precoFinal()}`)