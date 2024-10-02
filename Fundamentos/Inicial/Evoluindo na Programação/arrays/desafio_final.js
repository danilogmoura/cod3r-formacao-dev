const frutas = ['Banana', 'Maça', 'Uva', 'Mamão']


function forEach(array, funcao) {
    for(let indice in array) {
        funcao(array[indice], indice, array)
    }
}

function paraCadaElemento (elemento, indice, array) {
    console.log(`O elemento de indíce ${indice} é um(a) ${elemento} da certa ${array}`)
}

forEach(frutas, paraCadaElemento)

forEach(frutas, function(elemento) {
    console.log(`${elemento} é de fato uma fruta!`)
})