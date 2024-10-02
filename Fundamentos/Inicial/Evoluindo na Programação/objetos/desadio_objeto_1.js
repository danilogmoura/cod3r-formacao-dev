const data = {
    dia: 7,
    mes: 11,
    ano: 2026,
    formatar: function() {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

data.dia = 9
data.mes = 12
data.noFuturo = true

console.log(data.dia)
console.log(data.mes)
console.log(data.ano)

console.log(data)
console.log(data.formatar())