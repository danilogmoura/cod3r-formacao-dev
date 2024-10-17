class Materia {
    #nome
    #notas = []

    constructor(nome) {
        this.nome = nome
    }

    set nome(nome) {
        if (nome && typeof nome === 'string' && nome.trim().length > 0) {
            this.#nome = nome
        } else {
            console.error('Nome inválido')
        }
    }

    get nome() {
        return this.#nome
    }

    set nota(nota) {
        if (typeof nota === 'number' && nota >= 0 && nota <= 10) {
            this.#notas.push(nota)
        } else {
            console.error('Nota inválida')
        }
    }

    get notas() {
        this.#notas
    }

    #calculoMedia = (acumulador, valorAtual, indice, array) => {
        const quatidadeElementos = array.length
        const ultimo = indice == quatidadeElementos - 1
        const novoValor = acumulador + valorAtual

        return ultimo ?
            Math.round((novoValor / quatidadeElementos) * 100) / 100 :
            novoValor
    }

    get media() {
        return this.#notas.reduce(this.#calculoMedia)
    }

    get status() {
        const media = this.media

        if (media >= 7) {
            return 'Aprovado'
        } else if (media <= 5) {
            return 'Reprovado'
        } else {
            return 'Recuperação'
        }
    }
}

class Aluno {
    #nome
    #materias = []

    constructor(nome) {
        this.nome = nome
    }

    set nome(nome) {
        if (nome && typeof nome === 'string' && nome.trim().length > 0) {
            this.#nome = nome
        } else {
            console.error('Nome inválido')
        }
    }

    get nome() {
        return this.#nome
    }

    set materia(materia) {
        this.#materias.push(materia)
    }

    get materias() {
        return this.#materias
    }

    get statusAluno() {
        this.#materias.forEach(materia => {
            const nomeFormatado = materia.nome.padEnd(15, ' ')
            const mediaFormatada = (materia.media + '').padEnd(5, ' ')
            console.log(`${nomeFormatado} média:${mediaFormatada} | ${materia.status}`)
        })
    }

    get statusPais() {
        const recuperacao = this.#materias.filter(materia => materia.status === 'Recuperação')
        const reprovado = this.#materias.filter(materia => materia.status === 'Reprovado').length

        console.log(recuperacao.length)

        if (reprovado || recuperacao > 2) {
            console.log('Reprovado')
        } else if (recuperacao >= 0 && recuperacao <= 2) {
            console.log('Recuperação')
        } else {
            console.log('Aprovado')
        }
    }
}

portugues = new Materia('Português')
portugues.nota = 7.4
portugues.nota = 5.6
portugues.nota = 9.0
portugues.nota = 10

matematica = new Materia('Matemática')
matematica.nota = 4.4
matematica.nota = 5.0
matematica.nota = 8.2
matematica.nota = 7.0

ciencias = new Materia('Ciências')
ciencias.nota = 8.2
ciencias.nota = 7.6
ciencias.nota = 8.0
ciencias.nota = 6.3

estudosSociais = new Materia('Estudos Sociais')
estudosSociais.nota = 9.2
estudosSociais.nota = 7.6
estudosSociais.nota = 8.5
estudosSociais.nota = 7.3

const aluno = new Aluno('Joãozinho')
aluno.materia = portugues
aluno.materia = matematica
aluno.materia = ciencias
aluno.materia = estudosSociais

aluno.statusAluno
aluno.statusPais