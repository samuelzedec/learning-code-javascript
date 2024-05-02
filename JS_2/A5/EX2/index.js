let cartas = ['carta.1', 'carta.2', 'carta.3', 'carta.4', 'carta.5', 'carta.6', 'carta.7', 'carta.8', 'carta.9', 'carta.10']
let valores = 0
let acao
let i

do {

    for(i = 0; i < cartas.length; i++){
    }

    valores = parseFloat(prompt(
        'Quantidade de cartas: ' + i +
        '\n\nDigite a opção desejada:' +
        '\n[1] - Puxar uma carta' +
        '\n[2] - Adicionar uma carta' +
        '\n[3] - Sair'
    ))

    switch(valores) {
        case 1:
            acao = cartas.shift()
            alert(`Carta puxada: ${acao}`)
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