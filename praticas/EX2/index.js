let n1 = 0
let i

for(i = 0; i < 3; i++) {
    //Entrada
    n1 = parseFloat(prompt('Digite um número'))

    //processamento
    if(n1 > 0) {
        alert('Número positivo...')
    } else if(n1 < 0) {
        alert('Número Negativo...')
    } else {
        alert('Número nulo...')
    }
}