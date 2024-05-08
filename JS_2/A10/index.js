let imoveis = []
let menu = 0
let nome = prompt('Qual seu nome?')

do {
    menu = Number(prompt(
        'Bem-vindo ' + nome + ', Aqui está o menu da nossa imóbiliaria!' +
        '\nNúmero de imóveis: ' + imoveis.length +
        '\n\nDigite a opção desejada:' +
        '\n[1] - Adicionar imóvel' +
        '\n[2] - Ver imóveis disponíveis' +
        '\n[3] - Encerrar programa'
    ))

    switch(menu) {
        case 1:
            let imovel = {}
            imovel.proprietario = prompt('Qual o nome do proprietário?')
            imovel.quartos = prompt('Quantidade de quartos do imóvel?')
            imovel.banheiro = prompt('Quantidade de banheiros no imóvel?')
            imovel.garagem = prompt('o imóvel possui garagem? (Sim/Não)')

            let confirmacao = confirm(
                'Os dados estão corretos?' +
                '\nNome do proprietário: ' + imovel.proprietario +
                '\nQuantidade de Quartos: ' + imovel.quartos +
                '\nQuantidade de Banheiros: ' + imovel.banheiro +
                '\nPossui garagem? ' + imovel.garagem
            )

            if(confirmacao) {
                imoveis.push(imovel)
                alert('Dados enviados com sucesso')
            }
            break
        case 2:
            if(imoveis.length > 0) {
                for(let i = 0; i < imoveis.length; i++) {
                    alert(
                        'Imóvel ' + (i + 1) +
                        '\nProprietário: ' + imoveis[i].proprietario +
                        '\nQuantidade de quartos: ' + imoveis[i].quartos +
                        '\nQuantidade de banheiros: ' + imoveis[i].banheiro +
                        '\nPossui garagem: ' + imoveis[i].garagem
                    )
                }
            } else {
                alert('Não há imóveis cadastrados')
            }
            break
        case 3:
            alert('Programa encerrado...')
            break
        default:
            alert('Opção Inválida... Tente Novamente')
    }
} while(menu !== 3)