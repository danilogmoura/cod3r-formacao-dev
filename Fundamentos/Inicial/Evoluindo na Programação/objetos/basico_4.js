const cliente = {
    codigo: 57235,
    nome: 'Ana Medeiros Albuquerque',
    vip: true,
    endereco: {
        logradouro: 'Rua xyz',
        numero: 987,
        complemento: 'Apto 302 Bloco C',
        pontoRef: ['Hospital São Pedro', 'Shopping Riomar']
    },
    filhos: [
        {nome: 'Pedro M. Albuquerque', anoNascimento: 2004},
        {nome: 'Mariana M. Albuquerque', anoNascimento: 2014},
        {nome: 'Daniel M. Albuquerque', anoNascimento: 2017}
    ]
}

console.log(cliente['endereco']['logradouro'])
console.log(cliente.endereco.logradouro)
console.log(cliente.filhos[1].nome)
console.log(cliente.filhos[1].sobrenome)