function transformaEmArray(objeto) {
    let resultado = Object.entries(objeto)
    return resultado
}

const pessoa = { nome: 'Patrícia', idade: 22, id: 142 }
const arrayFinal = transformaEmArray(pessoa)
console.log(arrayFinal)