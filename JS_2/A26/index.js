const vagas = []

function novaVaga() {
    const nome = prompt('Informe o nome da vaga:')
    const descricao = prompt('Insira uma breve descrição sobre a vaga:')
    const dataLimite = prompt('Informe a data limite em que a vaga ficara diponível')

    const confirmacao = confirm(
        'Confirme se os dados sobre a vaga estão certos:' +
        '\nNome da vaga: ' + nome +
        '\nDescrição sobre a vaga : ' + descricao + 
        '\nData limite da vaga: ' + dataLimite
    )

    if(confirmacao) {
        alert('Vaga cadastrada com sucesso...')
        const vagaNova = {
            nome, //nome: nome
            descricao, //descricao: descricao
            dataLimite, //dataLimite: dataLimite
            candidatos: [] //candidatos: Array()
        }
        vagas.push(vagaNova)
    } else {
        alert('Cancelamento feito com sucesso. Vaga Não cadastrada')
    }
}

function listarVagas() {
    if(vagas.length > 0) {
        const vagaEmTexto = vagas.reduce(function(textoFinal, vagaAtual, indice) {
            textoFinal += indice + '. '
            textoFinal += vagaAtual.nome
            textoFinal += ' (' + vagaAtual.candidatos.length + (vagaAtual.candidatos.length === 1 ? ' candidato)\n' : ' candidatos)\n')
            return textoFinal
        }, '') 
    
        alert(vagaEmTexto)
    } else {
        alert('Não há vagas cadastradas no momento')
    }
}

function exibirVaga() {
    const indice = Number(prompt('Digite o índice da vaga que deseja visualizar'))
    if(vagas[indice]) {
        const vaga = vagas[indice] 
        const candidatoEmTexto = vaga.candidatos.reduce(function(textoFinal, candidato) {
            textoFinal += ' \n- ' + candidato
            return textoFinal
        }, '')

        alert(
            'Índice da vaga: ' + indice +
            '\nNome da vaga: ' + vaga.nome +
            '\nDescrição sobre a vaga: ' + vaga.descricao +
            '\nData limite: ' + vaga.dataLimite +
            '\nQuantidade de candidatos: ' + vaga.candidatos.length +
            '\nNome dos candidatos: ' + candidatoEmTexto
        )
    } else {
        alert('Vaga no índice ' + indice + ', não existe!')
    }
}

function cadastrarCandidato() {
    const nome = prompt('Qual o nome do(a) candidato(a):')
    const indice = Number(prompt('Informe o índice da vaga que você deseja se cadastrar:'))
    if(indice >= 0 && indice < vagas.length) {
        const confirmacao = confirm(
            'Confirme se os dados estão corretos:' +
            '\nNome do(a) candidato(a): ' + nome +
            '\nVaga solicitada: ' + vagas[indice].nome
        )

        if(confirmacao) {
            alert('Cadastro do(a) candidato(a) feito com sucesso...')
            vagas[indice].candidatos.push(nome)
        } else {
            alert('Cadastro candelado...')
        }
    } else {
        alert('Vaga não encontrado no banco de dados!')
    }
}

function excluirVaga() {
    const indice = Number(prompt('Insira o índice da vaga que deseja exluir:'))
    if(vagas[indice]) {
       const confirmacao = confirm (
            alert(
                'Índice da vaga: ' + indice +
                '\nNome da vaga: ' + vagas[indice].nome +
                '\nDescrição sobre a vaga: ' + vagas[indice].descricao +
                '\nData limite: ' + vagas[indice].dataLimite +
                '\nCandidatos(as) cadastrados(as): ' + vagas[indice].candidatos.length
            )
        )

        if(confirmacao) {
            alert('Vaga excluida com sucesso...')
            vagas.splice(indice, 1)
        } else {
            alert('Cancelamento na exclusão da vaga')
        }
    }
}

function menuCompleto() {
    const menu = Number(prompt(
        'Informe a opção desejada:' +
        '\n[1] - Criar uma vaga' +
        '\n[2] - Listar vagas' +
        '\n[3] - Exibir vaga' +
        '\n[4] - Cadastro de candidatos' +
        '\n[5] - Excluir candidatos' +
        '\n[6] - Encerrar programa'
    ))
    return menu
}

function exibirMenu() {
    let menu = 0
    do {
        menu = menuCompleto()

        switch(menu) {
            case 1:
                novaVaga()
                break
            case 2:
                listarVagas()
                break
            case 3:
                exibirVaga()
                break
            case 4:
                cadastrarCandidato()
                break
            case 5:
                excluirVaga()
                break
            case 6:
                alert('Programa encerrado...')
                break
            default:
                alert('Opção incorreta...Caso queira sair do programa insira 6')
        }
    } while(menu !== 6)
}
exibirMenu()