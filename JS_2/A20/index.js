function somar(a, b) {
    return a + b
}

const operacao = somar
console.log(operacao(5, 4))

//Função anônima
subtrair = function(a, b) {
    return a - b
}
console.log(subtrair(40, 50))

//Possíveis Usos
let calcular = {
    somar: somar,
    subtrair: subtrair,
    multiplicacao: function(a, b) {
        return a * b
    }
}

console.log(calcular.somar(9, 4))
console.log(calcular.subtrair(9, 4))
console.log(calcular.multiplicacao(7, 8))