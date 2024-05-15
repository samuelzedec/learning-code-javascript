let array = [1, 2, 7, 4, 9, 11, 15, 14, 20]
let n = 0 

function achei() {
    n = Number(prompt('Digite um número'))
    for(let i = 0; i < array.length; i++) {
        if(n === array[i]) {
            return 1
        } 
    }
}

function exibir() {
    let resultado = achei()
    if(resultado === 1) {
        alert('Número achado')
    } else {
        alert('Numero não encotrado')
    }
}

exibir()