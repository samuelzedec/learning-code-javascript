let array = [[],[]]
let menu = 0
let acao = 0

do {
    let dados = ''
    menu = Number(prompt(
        'Digite a opção desejada:\n' +
        'Dados armazenados: ' + array[0].length + '\n\n' +
        '[1] - Enviar dados\n' +
        '[2] - Ver dados organizados\n' +
        '[3] - Ver dados na ordem de envio\n' +
        '[4] - Encerrar o programa'
    ))

    switch(menu) {
        case 1:
            acao = Number(prompt('Digite o número que deseja enviar'))
            let confirmacao = confirm('Deseja enviar esses dados?')
            
            if(confirmacao) {
                array[0].unshift(acao)
                array[1].unshift(acao)
                alert('Dados enviados com sucesso!')
            } else {
                alert('Cancelamentos no envio de dados')
            }
            break
        case 2:
            if(array[0].length > 0){
                for(let i = 0; i < array[0].length; i++) {
                    for(let j = i + 1; j < array[0].length; j++){
                        if(array[0][i] > array[0][j]) {
                            acao = array[0][i]
                            array[0][i] = array[0][j]
                            array[0][j] = acao
                        }
                    }
                }
                //alert(`Dados ordenados: \n${array[0].join('\n')}`)
                for(let k = 0; k < array[0].length; k++) {
                   dados += '\n' + array[0][k] 
                }
                alert(`Dados ordenados: ${dados}`)
            } else {
                alert('Não há dados armazenados')
            }
            break
        case 3:
            if(array[1].length > 0) {
                //alert(`Dados na ordem de envio: \n${array[1].join('\n')}`)
                for(let x = 0; x < array[1].length; x++ ) {
                    dados += '\n' + array[1][x]
                }
                alert(`Dados na ordem de envio: ${dados}`)
            } else {
                alert('Não há dados armazenados')
            }
            break
        case 4:
            alert('Programa encerrado...')
            break
        default:
            alert('Opção incorreta...Tente novamente!')
    }
} while(menu !== 4)