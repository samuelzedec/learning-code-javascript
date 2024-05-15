let resultudo = 0
let divisores = 0

function primitivo() {
    divisores = 0
    n = Number(prompt('Digite um número'))

    for(let i = 1; i <= n; i++) {
        if(n % i === 0) {
            divisores++
        }
    }

    if(divisores === 2) {
        return 1
    } else {
        return 0
    }
}

function exibir() {
    resultudo = primitivo()
    if(resultudo === 1) {
        alert('Numero primo')
    } else {
        alert('Numero tio')
    }
}

exibir()