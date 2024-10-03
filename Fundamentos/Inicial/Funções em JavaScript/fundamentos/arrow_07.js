const somar = a => {
    return b => {
        return c => a + b + c
    }
}

console.log(somar(1)(2)(3))


const somar2 = a => b => c => a + b + c

console.log(somar2(1)(2)(3))