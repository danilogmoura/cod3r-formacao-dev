const bomDia = () => 'Bom dia!'
const baTarde = () => 'Boa tarde!'

const executar = (fn) => fn()

console.log(executar(bomDia))
console.log(executar(bomTarde))