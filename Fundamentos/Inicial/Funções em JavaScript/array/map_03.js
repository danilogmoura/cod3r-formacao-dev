const frases = ['Cuidado', 'Olha o carro']

const gritar = str => str.toUpperCase()
const enfatizar = str => str + '!!!'
const exagerar = str => str.split('').join(' ')

const final = frases
        .map(gritar)
        .map(exagerar)
        .map(enfatizar)

console.log(frases, final)