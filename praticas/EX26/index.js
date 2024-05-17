let array = [[], []]
function arrayUm() {
    let number = 0
    for(let i = 0; i < 10; i++) {
        number = Number(prompt('Elemento ' + (i + 1) + ':'))
        array[0].push(number)
    }
}
arrayUm()

function impaOuPar() {
    console.log('Vetor 2:\n')
    for(let i = 0; i < array[0].length; i++) {
        if(array[0][i] % 2 === 0) {
            array[1][i] = array[0][i] / 2
        } else {
            array[1][i] = array[0][i] * 3
        }
        console.log(array[1][i])
    }
}

function exibirNoConsole() {
    console.log('Vetor 1:\n')
    for(let i = 0; i < array[0].length; i++) {
        console.log(array[0][i])
    }
}
exibirNoConsole()
impaOuPar()



