function executar(funcao, x = 10, y = 10) {
    if (typeof funcao === 'function') {
        console.log(funcao(x, y))
    }
}

function somar(a, b) {
    return a + b
}

function subtrair(a, b) {
    return a - b
}

function multiplicar(a, b) {
    return a * b
}


function bomDia() {
    return 'Bom Dia!'
}

executar(somar, 7, 4)
executar(subtrair, 33, 30)
executar(multiplicar, 7, 9)

executar(multiplicar)
executar(somar)
executar(subtrair)

executar(bomDia)
executar(bomDia, 2, 4)