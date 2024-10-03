// fn ->  3 * 7
// fn ->  3 + 7
// fn ->  3 - 7
// fn ->  3 / 7

// calcular(3) (7) (fn)

const calcular = valor1 => valor2 => fn => fn(valor1, valor2)

const multiplicacao = (valor1, valor2) => valor1 * valor2
const adicao = (valor1, valor2) => valor1 + valor2
const subtracao = (valor1, valor2) => valor1 - valor2
const divisao = (valor1, valor2) => valor1 / valor2

let calculo = calcular(3)(7) 
console.log(calculo(multiplicacao))
console.log(calculo(adicao))
console.log(calculo(subtracao))
console.log(calculo(divisao))