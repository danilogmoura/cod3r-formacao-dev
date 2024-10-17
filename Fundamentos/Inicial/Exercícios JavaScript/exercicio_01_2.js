function entregaParaDiretoria(aluno) {
    let objRetorno = {
        nome: aluno.nome,
        materias: []
    }

    for (materia of aluno.materias) {
        let acc = 0
        for (nota of materia.notas) {
            acc = acc + nota
        }

        objRetorno.materias.push({
            nome: materia.nome,
            media: acc / 4
        })
    }
    return objRetorno
}

function entregaParaAluno(aluno) {
    let alunoComMedia = entregaParaDiretoria(aluno)
    let objRetorno = {
        nome: alunoComMedia.nome,
        materias: []
    }

    for (materia of alunoComMedia.materias) {
        let conceito
        if (materia.media >= 7) {
            conceito = "APROVADO"
        } else if (materia.media < 7 && materia.media >= 5) {
            conceito = "RECUPERAÇÃO"
        } else {
            conceito = "REPROVADO"
        }

        objRetorno.materias.push({
            nome: materia.nome,
            conceito
        })
    }
    return objRetorno
}

function entregaParaPais(aluno) {
    let alunoConceito = entregaParaAluno(aluno)
    let conceitos = []

    for (materia of alunoConceito.materias) {
        conceitos.push(materia.conceito)
    }

    if (conceitos.includes("REPROVADO")) {
        return "REPROVADO"
    } else if (conceitos.includes("RECUPERAÇÃO")) {
        return "RECUPERAÇÃO"
    } else if (!conceitos.includes("APROVADO")) {
        return "ERRO NA VALIDAÇÃO"
    } else {
        return "APROVADO"
    }
}


const joao = {
    nome: "Joaozinho",
    materias: [
        {
            nome: "Português",
            notas: [7.4, 5.6, 10, 9],
        },
        {
            nome: "Matemática",
            notas: [4.4, 5.0, 8.2, 7.0],
        },
        {
            nome: "Ciências",
            notas: [8.2, 7.6, 8.0, 6.3],
        },
        {
            nome: "Estudos Sociais",
            notas: [9.2, 7.6, 8.5, 7.0],
        },
    ],
};

entregaParaDiretoria(joao)
console.log(entregaParaDiretoria(joao))
entregaParaAluno(joao)
console.log(entregaParaAluno(joao))
entregaParaPais(joao)
console.log(entregaParaPais(joao))