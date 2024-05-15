let array = []
let n = 0

function numeros() {
    for(let i = 0; i < 5; i++) {
        n = Number(prompt('Digite um número:'))
        array.push(n)
    }
}

function exibir() {
    numeros()
    let menor = 9999999999
    let indice = 0
    for(let i = 0; i < array.length; i++) {
        if(menor > array[i]) {
            menor = array[i]
        }
        if(menor === array[i]) {
            indice = i
        }
    }

    alert(
        'Menor número: ' + menor +
        '\nIndice: ' + indice
    )
}
exibir()
