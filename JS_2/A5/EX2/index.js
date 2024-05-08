let baralho = []
let acao = ''
let menu = 0

do {
    menu = Number(prompt(
        'Quantidade de cartas: ' + baralho.length +
        '\n\nDigite a opção deseja:' +
        '\n[1] - Tirar uma carta do topo do baralho' +
        '\n[2] - Adicionar uma carta ao final do baralho' +
        '\n[3] - Sair do programa' 
    ))

    switch(menu) {
        case 1:
            acao = baralho.shift()
            acao ? alert('Carta puxada: ' + acao) : alert('não há cartas no baralho')
            break
        case 2: 
            acao = prompt('Qual carta você deseja adicionar?')
            baralho.push(acao)
            break
        case 3:
            alert('Programa encerrado...')
            break
        default:
            alert('Opção incorreta. Tente novamente!')
    }
} while(menu !== 3)