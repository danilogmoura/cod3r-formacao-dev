function promessaComPossivelErro(chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            if (Math.random() < chanceErro) {
                reject('Ocorreu um erro!')
            } else {
                resolve('Tudo certo')
            }
        } catch (e) {
            reject(e)
        }
    })
}

promessaComPossivelErro(0.5)
    .then(
        resultado => resultado + '!!!',     // resolve
        erro => console.log(`#1: ${erro}`)  // reject
    )
    .then(
        console.log,
        erro => console.log(`#2: ${erro}`)
    )