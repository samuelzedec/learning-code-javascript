let cartas = []
let valores = 0
let acao

do {

    valores = parseFloat(prompt(
        'Quantidade de cartas: ' + cartas.length +
        '\n\nDigite a opção desejada:' +
        '\n[1] - Puxar uma carta' +
        '\n[2] - Adicionar uma carta' +
        '\n[3] - Sair'
    ))

    switch(valores) {
        case 1:
            acao = cartas.shift()
            if(acao) {
                alert(`Carta puxada: ${acao}`)
            } else {
                alert('não a carta no baralho')
            }
            break
        case 2: 
            acao = prompt('Qual carta deseja adicionar')
            cartas.unshift(acao)
            break
        case 3: 
            alert('Programa Encerrado')
            break
        default:
            alert('Opção Incorreta')
    }

} while(valores !== 3)