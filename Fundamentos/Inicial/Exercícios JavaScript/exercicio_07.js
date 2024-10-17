const circulo = { tipo: 'circulo', raio: 4.5 }
const triangulo = { tipo: 'triangulo', base: 4.5, altura: 7.8 }
const retangulo = { tipo: 'retangulo', base: 8.2, altura: 8 }

function calculaArea(forma) {
    let area = 0
    switch (forma.tipo) {
        case 'circulo':
            if (forma.raio) {
                area = Math.PI * (forma.raio ** 2)
            }
            break;
        case 'triangulo':
            if (forma.base && forma.altura) {
                area = forma.base * forma.altura / 2
            }
            break;
        case 'retangulo':
            if (forma.base && forma.altura) {
                area = forma.base * forma.altura
            }
            break;
        default:
            return 'Forma inválida';
    }

    return area
}

console.log(calculaArea(circulo))
console.log(calculaArea(triangulo))
console.log(calculaArea(retangulo))