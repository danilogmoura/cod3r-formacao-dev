function esperarPor(timeout) {
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve()
        }, timeout);
    })
}

function executarPromise() {
    esperarPor(2000)
        .then(() => console.log('[Promise] Depois de 2 segundos...'))
        .then(() => esperarPor(3000))
        .then(() => console.log('[Promise] Depois de 3 segundos...'))
        .then(() => esperarPor(1500))
        .then(() => console.log('[Promise] Depois de 1.5 segundos...'))
}

async function executarAsync() {
    await esperarPor(2000)
    console.log('[Async/Await] Depois de 2 segundos...')

    await esperarPor(3000)
    console.log('[Async/Await] Depois de 3 segundos...')

    await esperarPor(1500)
    console.log('[Async/Await] Depois de 1.5 segundos...')
}

executarPromise()
executarAsync()

