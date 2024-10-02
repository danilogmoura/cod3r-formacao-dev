const nome = ['Ana', 'Bia', 'Carlos', 'Daniel',  'Rafael']

function paraCadaElemnto(elemento, indice, array) {
    console.log(elemento, indice, array)
}

nome.forEach(paraCadaElemnto)

nome.forEach(function (elemento, i, array){
    console.log(elemento, i, array)
})