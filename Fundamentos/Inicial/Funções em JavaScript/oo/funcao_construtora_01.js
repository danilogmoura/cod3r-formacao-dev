// Função cosntrutora
function Data(dia, mes, ano) {
    this.dia = dia
    this.mes = mes
    this.ano = ano
}

const data1 = new Data(1, 1, 2023)
const data2 = new Data(1, 2, 2024)

console.log(typeof data1, data1)
console.log(typeof data2, data2)

data1.mes = 6
data1.ano = 2025

console.log(`${data1.dia}/${data1.mes}/${data1.ano}`)