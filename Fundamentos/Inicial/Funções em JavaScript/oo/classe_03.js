class Data {
    #dia = 1
    #mes = 1
    #ano = 1970

    // Getters / Setters

    get dia() {
        return this.#dia
    }

    set dia(valor) {
        if (valor >= 1 && valor <= 31) {
            this.#dia = valor
        } else {
            console.error('Dia inválido')
        }
    }

    get mes() {
        return this.#mes
    }

    set mes(mes) {
        if (mes >= 1 && mes <= 12) {
            this.#mes = mes
        } else {
            console.log('Mês inválido')
        }
    }

    get ano() {
        return this.#ano
    }

    set ano(ano) {
        if (typeof ano === 'number' && ano >= 1970 && ano <= 2900) {
            this.#ano = ano
        } else {
            console.log('Ano inválido')
        }
    }

    exibir() {
        return `${this.#dia}/${this.#mes}/${this.#ano}`
    }
}

const data1 = new Data()

data1.dia = 13
data1.ano = 2040
console.log(data1.dia)
console.log(data1.exibir())