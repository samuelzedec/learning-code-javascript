let n1 = parseFloat(prompt('Digite um número:'))
n1 -= 2

let a = 1
let b = 0
let auxiliar = 0
let valores = 'Fibonacci:\n' + b + '\n' + a

for(let i = 0; i < n1; i++) {
    auxiliar = a + b
    b = a
    a = auxiliar

    valores += '\n' + auxiliar
}

alert(valores)