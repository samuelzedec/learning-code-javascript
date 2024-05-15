let array = [[],[]]
let menu = 0
let exclusao = 0
let exclusao2 = 0

do {
    let acao = 0
    let dados = ''

    menu = Number(prompt(
        'Digite a opção desejada:\n' +
        'Dados armazenados (ordenados): ' + array[0].length  +
        '\nDados armazenados (ordem de envio): ' + array[1].length +
        '\n\n[1] - Enviar dados\n' +
        '[2] - Ver dados organizados\n' +
        '[3] - Ver dados na ordem de envio\n' +
        '[4] - Apagar um dado\n' +
        '[5] - Encerrar o programa'
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
                for(let x = array[1].length - 1; x >= 0; x--) {
                    dados += '\n' + array[1][x]
                }
                alert(`Dados na ordem de envio: ${dados}`)
            } else {
                alert('Não há dados armazenados')
            }
            break
        case 4:
            alert('Lembrando que só irá ser apagado um dado existente!')
            acao = Number(prompt('Qual número deseja excluir?'))
            exclusao = array[0].indexOf(acao)
            exclusao2 = array[1].indexOf(acao)

            if(exclusao !== -1 && exclusao2 !== -1) {
                array[0].splice(exclusao, 1)
                array[1].splice(exclusao2, 1)
                alert('Dado excluido')
            } else {
                alert('Dado não encontrado')
            }
            break
        case 5:
            alert('Programa encerrado...')
            break
        default:
            alert('Opção incorreta...Tente novamente!')
    }
} while(menu !== 5)