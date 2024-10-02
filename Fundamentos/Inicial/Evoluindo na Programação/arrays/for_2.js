const numeros = [68, 55, 123, 222, 95, 33, 77]

// foreach => para cada elemento do array (of)
for (let numero of numeros) {
    console.log(numero)
}

// foreach => para cada indice do array (in)
for (let indice in numeros) {
    console.log(`${indice} => ${numeros[indice]}`)
}
