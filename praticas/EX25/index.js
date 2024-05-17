let array = [[], [], [], [], []]

function primeiroArray() {
    let dados = 0
    console.log('Array 1:')
    for(let i = 0; i < array.length; i++) {
        dados = Number(prompt('Digite os dados do primeiro array:'))
        array[0].push(dados)
        console.log(array[0][i])
    }
}
primeiroArray()

function segundoArray() {
    let dados = 0
    console.log('\n\nArray 2:')
    for(let i = 0; i < array.length; i++) {
        dados = Number(prompt('Digite os dados do segundo array:'))
        array[1].push(dados)
        console.log(array[1][i])
    }
}
segundoArray()

function diferencaDosArrays() {
    let dados = 0
    console.log('\n\nDiferença:\n')
    for(let i = 0; i < array.length; i++) {
        dados = array[0][i] - array[1][i]
        array[2].push(dados)
        console.log(array[2][i] + '\n')
    }
}
diferencaDosArrays()

function somaDosArrays() {
    let dados = 0
    console.log('\n\nSoma:\n')
    for(let i = 0; i < array.length; i++) {
        dados = array[0][i] + array[1][i]
        array[3].push(dados)
        console.log(array[3][i] + '\n')
    }
}
somaDosArrays()

function multiplicacaoDosArrays() {
    let dados = 0
    console.log('\n\nMultiplicação:\n')
    for(let i = 0; i < array.length; i++) {
        dados = array[0][i] * array[1][i]
        array[4].push(dados)
        console.log(array[4][i] + '\n')
    }
}
multiplicacaoDosArrays()