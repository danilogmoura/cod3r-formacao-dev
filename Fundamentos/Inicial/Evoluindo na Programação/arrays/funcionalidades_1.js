const numeros = [1, 2, 3, 4, 5, 4]

numeros[0] = 100
numeros.push(6)


console.log(numeros.indexOf(4, 4))
console.log(numeros.indexOf(4))
console.log(numeros.indexOf(2))
console.log(numeros.includes(100, 1))
console.log(numeros.includes(10))
console.log(numeros.includes(6))
console.log(numeros.length)
console.log(numeros.join(' - '))
console.log(numeros)

numeros.push(7, 8, 9)
const numeros2 = numeros.concat(7, 8, 9)
console.log(numeros)
console.log(numeros2)