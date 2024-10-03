const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const numeroPar = numero => numero % 2 === 0

const pares = numeros.filter(numeroPar)
console.log(pares)