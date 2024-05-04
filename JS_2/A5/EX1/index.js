let nome = ['Lucas Lima', 'José Gabriel', 'Brendo', 'Thiago']
let acao = ''
let menu = 0

do {
    let filaDeEspera = ''
    let posisao = 1

    for(let i = 0; i < nome.length; i++) { 
        filaDeEspera += '\n' + posisao + ' - ' + nome[i]
        posisao++
        
    }
    
    menu = parseFloat(prompt(
        'Pacientes:' + 
        filaDeEspera +
        '\n\nDigite a opção desejada:' +
        '\n[1] - Consultar Paciente' +
        '\n[2] - Novo Paciente' +
        '\n[3] - Sair'
    ))

    switch(menu) {
        case 1: 
            acao = nome.shift()
            if(acao) {
                alert('Paciente Consultado: ' + acao)
            } else {
                alert('Não há mais pacientes na fila de espera')
            }
            break
        case 2: 
            acao = prompt('Nome do paciente')
            nome.push(acao)
            break
        case 3: 
            alert('Programa encerrado')
            break
        default:
            alert('Opção errada')
    }
} while(menu !== 3)