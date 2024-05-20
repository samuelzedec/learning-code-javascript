function calcular(a, b, operacao) {
    console.log('Realizando uma operação')
    const resultado = operacao(a, b)
    return resultado
}

function somar(x, y) {
    console.log('Realizando uma soma')
    return x + y
}

function subtrair(x , y) {
    console.log('Realizando uma subtração')
    return x - y
}
console.log(calcular(7, 8, somar))
console.log(calcular(7, 8, subtrair))

console.log(calcular(8, 9, function(a, b) {
    console.log('Realizando uma multiplicação')
    return a * b
}))

console.log(calcular(8, 2, function(a, b) {
    console.log('Realizando o resto da divisão')
    return a % b
}))

let dados = calcular(8, 4, function(a, b) {
    console.log('Realizando uma divisão')
    return a / b
})
console.log(dados)