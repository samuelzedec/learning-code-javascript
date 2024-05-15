//Fatorial

let n1 = parseFloat(prompt('Digite um número:'))
let n2 = 1

while(n1 > 0) {
    n2 *= n1
    n1--
}

alert('fatorial: ' + n2)