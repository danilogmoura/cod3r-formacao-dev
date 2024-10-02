// Objeto: aluno
// Atributos: nome, disciplinas (nome, 3 notas)
// Método: média(disciplina), mediaGlobal

function mediaDeUmArray(numeros) {
    if (!Array.isArray(numeros)) {
        return null
    }

    let total = 0

    for (let numero of numeros) {
        total += numero
    }

    return total / numeros.length
}

const aluno = {
    nome: 'Carlos Adão',
    disciplinas: [
        { nome: 'Física', notas: [5.4, 9, 8.1] },
        { nome: 'Filosofia', notas: [7.9, 6.3, 8.9] },
        { nome: 'História', notas: [8.7, 9, 9.6] }
    ],
    media: function (nomeDisciplina) {
        for (let disciplina of this.disciplinas) {
            if (disciplina.nome.toLowerCase() === nomeDisciplina.toLowerCase()) {
                return mediaDeUmArray(disciplina.notas)
            }
        }
        return null
    },
    mediaGlobal: function () {
        const medias = []

        for (let disciplina of this.disciplinas) {
            medias.push(mediaDeUmArray(disciplina.notas))
        }

        return mediaDeUmArray(medias)
    }
}

console.log(aluno.media('Física'))
console.log(aluno.media('Filosofia'))
console.log(aluno.media('História'))
console.log(aluno.mediaGlobal())