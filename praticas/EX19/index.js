function menorNumber() {
    let menor = 999999999
    let numeros = ''
    let n = 0

    for(let i = 0; i < 5; i++) {
        n = Number(prompt('Digite um número:'))
        numeros += '\n' + n
        if(menor > n) {
            menor = n
        }
    }

    alert(numeros + '\nMenor number: ' + menor)
}

menorNumber()