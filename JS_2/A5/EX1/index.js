let filaDeEspera = []
let acao = ''
let menu = 0

do {
    let pacientes = ''
    for(let i = 0; i < filaDeEspera.length; i++) {
        pacientes += (i + 1) + ' - ' + filaDeEspera[i] + '\n'
    }

    menu = Number(prompt(
        'Paciente em fila:\n' +
        pacientes +
        '\n\nDigite o número da opção desejada:' +
        '\n[1] - Consultar Paciente' +
        '\n[2] - Adicionar paciente' +
        '\n[3] - Sair do programa'
    ))

    switch(menu) {
        case 1:
            acao = filaDeEspera.shift()
            acao ? alert('Paciente consultado: ' + acao) : alert('Não há pacientes na fila de espera' )
            break
        case 2:
            acao = prompt('Nome do paciente a ser adicionado:')
            filaDeEspera.push(acao)
            break
        case 3:
            alert('Programa encerrado...')
            break
        default:
            alert('Opção incorreta, tente novamente!')
    }

} while(menu !== 3)