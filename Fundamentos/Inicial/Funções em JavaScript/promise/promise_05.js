// fetch

const url = 'https://bible-api.com/?random=verse&translation=almeida'

fetch(url)
    .then(response => response.json())
    .then(dados => dados.verses[0])
    .then(versiculo => versiculo.text)
    .then(console.log)