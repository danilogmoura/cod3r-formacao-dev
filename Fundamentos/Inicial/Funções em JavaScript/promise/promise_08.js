function gerarNumeroEntre(min, max, timeout) {
    return new Promise(resolve => {
        setTimeout(() => {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, timeout)
    })

}

console.time('sequencial')
gerarNumeroEntre(1, 60, 4000)
    .then(console.log)
    .then(() => gerarNumeroEntre(1, 60, 4000))
    .then(console.log)
    .then(() => gerarNumeroEntre(1, 60, 4000))
    .then(console.log)
    .then(() => gerarNumeroEntre(1, 60, 4000))
    .then(console.log)
    .then(() => gerarNumeroEntre(1, 60, 4000))
    .then(console.log)
    .then(() => gerarNumeroEntre(1, 60, 4000))
    .then(console.log)
    .then(() => gerarNumeroEntre(1, 60, 4000))
    .then(console.log)
    .then(() => console.timeEnd('sequencial'))