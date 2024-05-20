//Exemplo real;
let lista = ["Maçã", "Banana", "Laranja", "Limão", "Uva"] 

function exibirElementos(elemento, indice, array) {
    console.log(elemento, indice)
}
/*for(let i = 0; i < lista.length; i++) {
    exibirElementos(lista[i], i, lista)
}*/
lista.forEach(exibirElementos)
lista.forEach(function(elemento, indice) {
    console.log({elemento, indice})
})

//Soma com for each
function soma(a, b) {
    return a + b
}

function result(number) {
    let total = 0
    number.forEach(function(elemento) {
        total = soma(total, elemento)
    })
    return total
}

console.log(result([1, 4, 5, 6, 8, 9]))

