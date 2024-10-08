// O problema da utilização de objetos literais

const usuario1 = {
    nome: 'Ana',
    email: 'ana@email.com.br',
    senha: '123456',
    cadastro: new Date()
}

const usuario2 = {
    nome: 'Carlos',
    email: 'carlos@email.com.br',
    dataCadastro: new Date()
}

console.log(usuario1, usuario2)