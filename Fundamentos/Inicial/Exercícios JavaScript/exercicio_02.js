function removerAtributo(objeto, atributo) {
    if (objeto[atributo]) {
        let objetoCopia = {... objeto}
        delete objetoCopia[atributo]

        return objetoCopia
    }
}

const pessoa = { nome: 'Ana', idade: 20 }

const pessoaAtualizada = removerAtributo(pessoa, 'idade')
console.log(pessoa)
console.log(pessoaAtualizada)