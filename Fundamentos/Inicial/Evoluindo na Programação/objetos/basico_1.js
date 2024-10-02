// Objeto criado de forma Literal!
const produto = {
    nome: 'Caneta BIC Preta',
    preco: 9.99,
    desconto: 0.2,
    altoCusto: false
}

console.log(produto)
console.log(produto['nome'])
console.log(produto['preco'])
console.log(produto['desconto'])
console.log(produto['altoCusto'])

console.log(produto.nome)
console.log(produto.preco)
console.log(produto.desconto)
console.log(produto.altoCusto)

produto['nome'] = 'Caneta BIC Verde'
produto.nome = 'Caneta BIC Vermelha'

console.log(typeof produto)