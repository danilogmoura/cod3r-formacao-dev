function ordena(arr, propriedade) {
    const comparacao = (a, b) => {
        if (a[propriedade] > b[propriedade]) {
            return -1
        } else if (b[propriedade] > a[propriedade]) {
            return 1
        } else {
            return 0
        }
    }

    return arr.sort(comparacao)
}

const pessoas = [
    { nome: 'Ana', idade: 30 },
    { nome: 'Enzo', idade: 5 },
    { nome: 'Carlos', idade: 98 },
    { nome: 'Anésio', idade: 94 },
]

console.log(ordena(pessoas, 'idade'))
console.log(ordena(pessoas, 'nome'))