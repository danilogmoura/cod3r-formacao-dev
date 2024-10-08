class Data {
    constructor(dia, mes, ano) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }

    exibir() {
        return `${this.dia}/${this.mes}/${this.ano}`
    }

}

const data1 = new Data(8, 19, 2024)
const data2 = new Data(9, 11, 1985)

console.log(typeof data1, data1.exibir())
console.log(typeof data2, data2.exibir())

console.log(typeof Data)