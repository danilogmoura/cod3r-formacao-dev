function exibirNoConsole (funcao) {
    if (typeof funcao === 'function') {
        const resultado = funcao()
        console.log(`O resultadado é ${resultado}`)
    }
}

// exibirNoConsole(2)

// exibirNoConsole(function () {})

function bomDia() {
    return 'Bom dia'
}

// Vai dar erro, pois será retornado a mensagem 'Bom dia' antes, ou seja 
// está sendo executada e o retorma é passado como parametro
// exibirNoConsole(bomDia())

exibirNoConsole(bomDia)