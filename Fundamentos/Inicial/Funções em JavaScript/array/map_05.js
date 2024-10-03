const numeros = [9, 8, 7, 5, 8]

numeros.map(function (elemento, indice, array) {
        console.log(elemento, indice, array)
})

numeros.map((elemento, indice, array) => console.log(elemento, indice, array))