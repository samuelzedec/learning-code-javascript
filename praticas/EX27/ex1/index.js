//Retornar a soma de um array de números
const numeros = [1, 4, 2, 4, 7]
//acumulador = 1
//numeroAtual = 4, 2, 4, 7
const total = numeros.reduce(function(acumulador, numeroAtual) {
    return acumulador + numeroAtual
}, 2)
// acumulador = 2
// Sem o valor inicial o valor do acumulador é o primeiro elemento do array, ja quando colocamos o valor incial, o acumulador começa com esse numero, exemplo ai é o 3
console.log(total)