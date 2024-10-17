function metadados(objeto) {
    let metadados = {
        boolean: 0,
        number: 0,
        string: 0,
        function: 0,
    }

    let valoresObjeto = Object.values(objeto)

    for (valor of valoresObjeto) {
        metadados[typeof valor] += 1
    }

    return metadados
}

const carro = {
    modelo: 'Gol',
    marca: 'Volkswagen',
    cor: 'Verde',
    ano: 2007,
    qtdePortas: 4,
    vidrosEletricos: true,
    seguro: true,
    acalerar: () => console.log('Indo mais rápido....'),
    frear: () => console.log('Parando....'),
    abrirVidros: () => console.log('Abrindo vidroe....')
}

console.log(metadados(carro))