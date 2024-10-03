Array.prototype.meuFilter = function (fn) {
    if (typeof fn !== 'function') return []

    const resultado = []
    for (let i = 0; i < this.length; i++) {
        if (fn(this[i], i, this)) resultado.push(this[i])
    }

    return resultado
}

const maiorOuIgualA4 = numero => numero >= 4
const numeros = [1, 2, 3, 4, 5]

console.log(numeros.filter(maiorOuIgualA4))
console.log(numeros.meuFilter(maiorOuIgualA4))
console.log(numeros.meuFilter((numero) => true))