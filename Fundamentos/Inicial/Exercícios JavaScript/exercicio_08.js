function criarObjeto(chaves, valores) {
    if (chaves.length !== valores.length) {
        return 'Valor inválido!'
    }

    let objeto = {}

    for (let i = 0; i < chaves.length; i++) {
        objeto[chaves[i]] = valores[i]
    }

    return objeto
}

const array1 = ['nome', 'idade', 'id']
const array2 = ['Calor', 47, 457]

const objeto = criarObjeto(array1, array2)
console.log(objeto)