let n1 = parseFloat(prompt('Digite um número:'))
let a = 1
let b = 0
let auxiliar = 0
let i = 0

while(i <= n1) {
    
    auxiliar = a + b
    b = a
    a = auxiliar
    i++

    let valores = '\n' + auxiliar

    alert('Valores em fibonacci:' + valores)
}