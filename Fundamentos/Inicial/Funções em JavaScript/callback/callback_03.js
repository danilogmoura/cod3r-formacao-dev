const path = require('path')
const fs = require('fs')

const caminho = path.join(__dirname, '..', 'dados', 'aprovados.txt')

const lerArquivo = function (erro, conteudo) {
    if (erro) return
    
    console.log(erro)
    console.log(conteudo.toString())
}

fs.readFile(caminho, lerArquivo)

console.log(caminho)