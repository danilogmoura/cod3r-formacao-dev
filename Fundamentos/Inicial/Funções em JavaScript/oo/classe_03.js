class Data {
    #dia = 1
    #mes = 1
    #ano = 1970

    // Getters / Setters

    getDia() {
        return this.#dia
    }

    setDia(valor) {
        if (valor >= 1 && valor <= 31) {
            this.#dia = valor
        } else {
            console.error('Dia inválido')
        }
    }

    exibir() {
        return `${this.#dia}/${this.#mes}/${this.#ano}`
    }

}

const data1 = new Data()

data1.setDia(30)
console.log(data1.getDia())
console.log(data1.exibir())