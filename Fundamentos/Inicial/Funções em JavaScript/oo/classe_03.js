class Data {
    #dia = 1
    #mes = 1
    #ano = 1970

    exibir() {
        return `${this.#dia}/${this.#mes}/${this.#ano}`
    }

}

const data1 = new Data()

// data1.#dia = 'cuidado'

console.log(data1.exibir())