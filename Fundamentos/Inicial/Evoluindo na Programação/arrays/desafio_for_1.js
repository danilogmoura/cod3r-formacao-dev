const notas = [7.3, 8.1, 9.2, 8.1, 6.3, 7.9, 5.0, 6.0, 8.9, 10]

let total1 = 0
let media1 = 0
for (let i = 0; i < notas.length; i++) {
    total1 += notas[i]
}

media1 = total1 / notas.length
console.log(`A média da turma é ${media1}`)

let total2 = 0
let media2 = 0
for(nota of notas) {
    total2 += nota
}

media2 = total2 / notas.length
console.log(`A média da turma é ${media2}`)

let total3 = 0
let media3 = 0
for(indice in notas){
    total3 += notas[indice]
}

media3 = total3 / notas.length
console.log(`A média da turma é ${media3}`)