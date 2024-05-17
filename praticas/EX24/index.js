let array = [10, 8, 90, 7, 100, 1, 0]
let numero = Number(prompt('Digite um numero:'))
function verificar(number) {
    let dados = 0
    for(let i = 0; i < array.length; i++) {
        if(number === array[i]) {
            dados = 1
            break
        } else {
            dados = 0
        }
    }

    if(dados === 1) {
        alert('Número encontrado')
    } else {
        alert('Número não encontrado')
    }
}
verificar(numero)
