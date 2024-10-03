function bomDia() {
    console.log('Bom dia!')
}

const boaTarde = function () {
    console.log('Boa tarde!')
}

// Passar uma função como parametro para outra função
function executar(x) {
    if (typeof x === 'function') {
        x()
    }
}

executar(1)
executar('teste')
executar(bomDia)
executar(boaTarde)

//  Retornar uma função a partir de uma outra função
function potencia(expoente) {
    // parte da lógica
    return function (base) {
        return Math.pow(base, expoente)
    }
}

const aoQuadrado = potencia(2)
console.log(aoQuadrado(4))
console.log(aoQuadrado(5))

const aoCubo = potencia(3)
console.log(aoCubo(4))
console.log(aoCubo(5))

const resultado = potencia(3)(10)
console.log(resultado)