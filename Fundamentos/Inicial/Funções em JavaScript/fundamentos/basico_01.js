const a = 4
console.log(a)

function bomDia() {
    console.log('Bom dia!')
}
bomDia()

const boaTarde = function() {
    console.log('Boa tarde!')
}
boaTarde()

function somar(a = 0, b = 0) {
    return a + 3
}

let resultado = somar(3, 4)
console.log(resultado)

resultado = somar(3)
console.log(resultado)

resultado = somar(1, 2, 3, 4, 5)
console.log(resultado)

resultado = somar()
console.log(resultado)