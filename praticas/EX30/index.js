const banco = [
    {user: 'Lucas Lima', password: 40028922, code: 2212},
    {user: 'Samuel Zedec', password: 93127732, code: 2001},
    {user: 'Gabriel Porto', password: 94916643, code: 2610}
]
const dados = [
    {saldo: [0], deposito: [], saque: []},
    {saldo: [0], deposito: [], saque: []},
    {saldo: [0], deposito: [], saque: []}
]

//Menu principal
function executar() {
    let menu = 0
    do {
        menu = Number(prompt(
            'Bem-vindo ao Banco CPZ, digite a opção da sua conta abaixo:' +
            '\n[1] - 2212' +
            '\n[2] - 2001' +
            '\n[3] - 2610' +
            '\n[4] - Encerrar programa'
        ))
        switch(menu) {
            case 1:
                lucas()
                break
            case 2:
                samuel()
                break
            case 3:
                gabriel()
                break
            case 4:
                alert('Programa Encerrado... Até a próxima!')
                break
            default: 
                alert('Opção incorreta... Tente novamente!')
        }
    } while(menu !== 4)
}
executar()

//Conta bancaria LUCAS
function lucas() {
    let password = Number(prompt(
        'Seja vem-vindo, ' + banco[0].user +
        '\nInsira sua senha, para poder acessar sua conta:'
    ))

    while(password !== banco[0].password && password !== 1001) {
        password = Number(prompt(
            'Senha inválida, caso queira sair dessa conta insira (1001).'
        ))
    }

    if(password === banco[0].password) {
        acaoLucas()
    } else if(password === 1001) {
        alert('Saindo da conta de ' + banco[0].user + '...')
    }
}

function acaoLucas() {
    let menu = 0
    let saldoAntigo = 0
    let saldoAtualL = dados[0].saldo[0]
    do {
        menu = Number(prompt(
            'Saldo: R$ ' + saldoAtualL +
            '\n\nInforme a opção desejada:' +
            '\n[1] - Saque' +
            '\n[2] - Depósito' +
            '\n[3] - Extrato' +
            '\n[4] - Sair da conta'
        ))
        switch(menu) {
            case 1:
                saldoAntigo = saqueLucas(saldoAtualL)
                saldoAtualL -= saldoAntigo
                dados[0].saldo[0] = saldoAtualL
                break
            case 2:
                saldoAntigo = depositoLucas()
                saldoAtualL += saldoAntigo
                dados[0].saldo[0] = saldoAtualL
                break
            case 3:
                extratoLucas(saldoAtualL)
                break
            case 4:
                alert('Saindo da conta... Até a próxima!')
                break
            default: 
                alert('Opção incorreta... Tente novamente!')
        }
    } while(menu !== 4)
}

function saqueLucas(saldoDaConta) {
    let saque = Number(prompt('Insira o valor que deseja sacar:'))
    if(saque > saldoDaConta) {
        alert('Saldo insuficiente. Não é possivel fazer transação.')
        return saque = 0
    } else {
        dados[0].saque.push(saque)
        return saque
    }
}

function depositoLucas() {
    let deposito = Number(prompt('Informe o valor a ser depositado:'))
    dados[0].deposito.push(deposito)
    return deposito
}

function extratoLucas(saldoEmConta) {
    const dadosLucasSaque = dados[0]
    const dadosLucasDeposito = dados[0]

    const extratoTotalLucasSaque = dadosLucasSaque.saque.reduce(function(extratoTotal, movimentos) {
        extratoTotal += movimentos
        return extratoTotal
    }, 0)

    const extratoTotalLucasDeposito = dadosLucasDeposito.deposito.reduce(function(extratoTotal, movimentos) {
        extratoTotal += movimentos
        return extratoTotal
    }, 0)

    alert(
        'Extrato de total da conta:' +
        '\nSaldo em conta: ' + saldoEmConta +
        '\nDepositos: ' + extratoTotalLucasDeposito +
        '\nSaques: ' + extratoTotalLucasSaque
    )
}

//Conta bancaria SAMUEL
function samuel() {
    let password = Number(prompt(
        'Seja vem-vindo, ' + banco[1].user +
        '\nInsira sua senha, para poder acessar sua conta:'
    ))

    while(password !== banco[1].password && password !== 1001) {
        password = Number(prompt(
            'Senha inválida, caso queira sair dessa conta insira (1001).'
        ))
    }

    if(password === banco[1].password) {
        acaoSamuel()
    } else if(password === 1001) {
        alert('Saindo da conta de ' + banco[1].user + '...')
    }
}

function acaoSamuel() {
    let menu = 0
    let saldoAntigo = 0
    let saldoAtualS = dados[1].saldo[0]

    do {
        menu = Number(prompt(
            'Saldo: R$ ' + saldoAtualS +
            '\n\nInforme a opção desejada:' +
            '\n[1] - Saque' +
            '\n[2] - Depósito' +
            '\n[3] - Extrato' +
            '\n[4] - Sair da conta'
        ))
        switch(menu) {
            case 1:
                saldoAntigo = saqueSamuel(saldoAtualS)
                saldoAtualS -= saldoAntigo
                dados[1].saldo[0] = saldoAtualS
                break
            case 2:
                saldoAntigo = depositoSamuel()
                saldoAtualS += saldoAntigo
                dados[1].saldo[0] = saldoAtualS
                break
            case 3:
                extratoSamuel(saldoAtualS)
                break
            case 4:
                alert('Saindo da conta... Até a próxima!')
                break
            default: 
                alert('Opção incorreta... Tente novamente!')
        }
    } while(menu !== 4)
}

function saqueSamuel(saldoDaConta) {
    let saque = Number(prompt('Insira o valor que deseja sacar:'))
    if(saque > saldoDaConta) {
        alert('Saldo insuficiente. Não é possivel fazer transação.')
        return saque = 0
    } else {
        dados[1].saque.push(saque)
        return saque
    }
}

function depositoSamuel() {
    let deposito = Number(prompt('Informe o valor a ser depositado:'))
    dados[1].deposito.push(deposito)
    return deposito
}

function extratoSamuel(saldoEmConta) {
    const dadosSamuelSaque = dados[1]
    const dadosSamuelDeposito = dados[1]

    const extratoTotalSamuelSaque = dadosSamuelSaque.saque.reduce(function(extratoTotal, movimentos) {
        extratoTotal += movimentos
        return extratoTotal
    }, 0)

    const extratoTotalSamuelDeposito = dadosSamuelDeposito.deposito.reduce(function(extratoTotal, movimentos) {
        extratoTotal += movimentos
        return extratoTotal
    }, 0)

    alert(
        'Extrato de total da conta:' +
        '\nSaldo em conta: ' + saldoEmConta +
        '\nDepositos: ' + extratoTotalSamuelDeposito +
        '\nSaques: ' + extratoTotalSamuelSaque
    )
}

//Conta bancaria GABRIEL
function gabriel() {
    let password = Number(prompt(
        'Seja vem-vindo, ' + banco[2].user +
        '\nInsira sua senha, para poder acessar sua conta:'
    ))

    while(password !== banco[2].password && password !== 1001) {
        password = Number(prompt(
            'Senha inválida, caso queira sair dessa conta insira (1001).'
        ))
    }

    if(password === banco[2].password) {
        acaoGabriel()
    } else if(password === 1001) {
        alert('Saindo da conta de ' + banco[1].user + '...')
    }
}

function acaoGabriel() {
    let menu = 0
    let saldoAntigo = 0
    let saldoAtualG = dados[2].saldo[0]

    do {
        menu = Number(prompt(
            'Saldo: R$ ' + saldoAtualG +
            '\n\nInforme a opção desejada:' +
            '\n[1] - Saque' +
            '\n[2] - Depósito' +
            '\n[3] - Extrato' +
            '\n[4] - Sair da conta'
        ))
        switch(menu) {
            case 1:
                saldoAntigo = saqueGabriel(saldoAtualG)
                saldoAtualG -= saldoAntigo
                dados[2].saldo[0] = saldoAtualG
                break
            case 2:
                saldoAntigo = depositoGabriel()
                saldoAtualG += saldoAntigo
                dados[2].saldo[0] = saldoAtualG
                break
            case 3:
                extratoGabriel(saldoAtualG)
                break
            case 4:
                alert('Saindo da conta... Até a próxima!')
                break
            default: 
                alert('Opção incorreta... Tente novamente!')
        }
    } while(menu !== 4)
}

function saqueGabriel(saldoDaConta) {
    let saque = Number(prompt('Insira o valor que deseja sacar:'))
    if(saque > saldoDaConta) {
        alert('Saldo insuficiente. Não é possivel fazer transação.')
        return saque = 0
    } else {
        dados[2].saque.push(saque)
        return saque
    }
}

function depositoGabriel() {
    let deposito = Number(prompt('Informe o valor a ser depositado:'))
    dados[2].deposito.push(deposito)
    return deposito
}

function extratoGabriel(saldoEmConta) {
    const dadosGabrielSaque = dados[2]
    const dadosGabrielDeposito = dados[2]

    const extratoTotalGabrielSaque = dadosGabrielSaque.saque.reduce(function(extratoTotal, movimentos) {
        extratoTotal += movimentos
        return extratoTotal
    }, 0)

    const extratoTotalGabrielDeposito = dadosGabrielDeposito.deposito.reduce(function(extratoTotal, movimentos) {
        extratoTotal += movimentos
        return extratoTotal
    }, 0)

    alert(
        'Extrato de total da conta:' +
        '\nSaldo em conta: ' + saldoEmConta +
        '\nDepositos: ' + extratoTotalGabrielDeposito +
        '\nSaques: ' + extratoTotalGabrielSaque
    )
}