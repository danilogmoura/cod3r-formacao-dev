
const primeiroElemento = array => array[0]

const primeiroLetra = texto => texto[0]

const promessa = new Promise(resolve => {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

promessa
    .then(array => primeiroElemento(array))
    .then(elemento => primeiroLetra(elemento))
    .then(letra => letra.toLowerCase())
    .then(resultado => console.log(resultado))

console.log('Fim!')