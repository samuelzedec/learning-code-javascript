function executar() {
    let contaBancaria = 0
    let saldoAntigo = 0
    let saldoAtual = 0
    let acao = 0
    let menu = 0
    do {
        contaBancaria = Number(prompt('Insira o código da sua conta bancária:'))
        saldoAtual = Number(prompt('Insira o saldo da sua conta'))
        saldoAntigo = saldoAtual
        menu = Number(prompt(
            'Conta bancária: ' + contaBancaria +
            '\nSaldo: ' + saldoAntigo +
            '\n\nInforme a opção desejada:' +
            '\n[1] - Deposíto' +
            '\n[2] - Saque' +
            '\n[3] - Encerrar programa'
        ))

        switch(menu) {
            case 1:
                acao = deposito()
                saldoAtual += acao
                break
            case 2: 
                acao = saque(saldoAntigo)
                saldoAtual -= acao
                break
            case 3:
                alert('Programa encerrado')
                break
            default:
                alert('Opção incorreta. Tente Novamente!')
                break
        }
        if(menu !== 3) {
            if(menu === 1) {
                alert(
                    'Codigo da conta: ' + contaBancaria +
                    '\nSaldo Incial: ' + saldoAntigo +
                    '\nDeposito: ' + acao +
                    '\nSaldo Atual: ' + saldoAtual
                )
            } else if(menu === 2) {
                alert(
                    'Codigo da conta: ' + contaBancaria +
                    '\nSaldo Incial: ' + saldoAntigo +
                    '\nSaque: ' + acao +
                    '\nSaldo Atual: ' + saldoAtual
                )
            }
        }
    } while(menu !== 3)
}
executar()
function deposito() {
    let acao = Number(prompt('Informe o valor a ser depositado:'))
    return acao
}

function saque(saldoEmConta) {
    let acao = Number(prompt('Insira o valor a ser sacado:'))
    if(acao > saldoEmConta) {
        alert('Não é possível fazer o saque. Saldo Insuficiente')
        return 0
    } else {
        return acao
    }
}