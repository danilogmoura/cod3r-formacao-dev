const numeros = [7, 88, 1683, 4674, 33, 38, 47, 49]

for(let i = numeros.length - 1; i >= 0; i--) {
    console.log(numeros[i])
}

for(let i = numeros.length; i >= 0; --i) {
    console.log(numeros[i])
}

const numerosInvertidos = numeros.reverse()
for(let i in numeros) {
    console.log(`${i} => ${numeros[i]}`)
}