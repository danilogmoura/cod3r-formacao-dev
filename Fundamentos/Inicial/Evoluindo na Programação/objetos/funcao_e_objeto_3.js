// Classe!
// Função Construtora -> Criar Objetos
function Data(dia, mes, ano) {
    this.dia = dia
    this.mes = mes
    this.ano = ano

    this.formatar = function() {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

const data1 = new Data(1, 1, 2024)
data1.ano = 2025
console.log(data1.formatar())

const data2 = new Data(24, 2, 2026)
console.log(data2.formatar())
console.log(data2['ano'])

// 1. Inicia com Letra Maiúscula [Não Obrigatório]
// 2. Chamar função "new" ex new Data(1, 2, 2025)
// 3. Uso do this para acescentar atributos e métodos no objeto

// JavaScript = ECMAScript 2015