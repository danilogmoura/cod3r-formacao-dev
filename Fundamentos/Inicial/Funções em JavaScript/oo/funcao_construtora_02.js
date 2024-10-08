function Data(dia, mes, ano) {
    this.dia = dia
    this.mes = mes
    this.ano = ano

    // Método de instância público (Comportamento)
    this.exibir = function () {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

const data1 = new Data(1, 1, 2023)
const data2 = new Data(1, 2, 2024)

console.log(data1.exibir())
console.log(data2.exibir())