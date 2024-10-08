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

const data1 = new Data(45, 79, -689)

console.log(data1.exibir())