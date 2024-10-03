class Data {
    // Pode ser usado, foram apenas comentados
    // dia = 1
    // mes = 1
    // ano = 1970

    constructor(dia =1, mes = 1, ano = 1970) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }

    formatar() {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

const data1 = new Data(24, 12, 2024)
data1.ano = 2025

console.log(typeof Data)
console.log(data1)
console.log(data1.formatar())

const data2 = new Data()
console.log(data2.formatar())