let imoveis = []
let menu = 0
let confirmacao = 0
do {
    menu = Number(prompt(
        'Bem vindo. Aqui esta nosso menu:\n' +
        'Imóveis cadastrados: ' + imoveis.length +
        '\n[1] - Cadastrar Imóvel\n' +
        '[2] - Ver imóveis cadastrados\n' + 
        '[3] - Encerrar menu' 
    ))

    switch(menu) {
        case 1:
            let imovel = {}
            imovel.nome = prompt('Qual o nome do proprietário?')
            imovel.quartos = prompt('Qual a quantidade de quartos?')
            imovel.banheiro = prompt('Qual a quantidade de banheiros?')
            imovel.garagem = prompt('Possui garagem? (Sim/Não)')
            imovel.garagemQA = 0

            if(imovel.garagem === 'Sim') {
                imovel.garagemQA = Number(prompt('Qual a quantidade de garagem'))
                confirmacao = confirm(
                    'Confirme os dados inseridos:' +
                    '\nProprietário: ' + imovel.nome +
                    '\nQuantidade de quartos: ' + imovel.quartos +
                    '\nQuantidade de banheiros: ' + imovel.banheiro +
                    '\nPossui garagem: ' + imovel.garagem +
                    '\nQuantidade de garagem: ' + imovel.garagemQA 
                )
            } else {
                confirmacao = confirm(
                    'Confirme os dados inseridos:' +
                    '\nProprietário: ' + imovel.nome +
                    '\nQuantidade de quartos: ' + imovel.quartos +
                    '\nQuantidade de banheiros: ' + imovel.banheiro +
                    '\nPossui garagem: ' + imovel.garagem 
                )
            }

            if(confirmacao) {
                alert('Dados enviados com sucesso!')
                imoveis.push(imovel)
            } else {
                alert('Cancelamento no envio de dados')
            }
            break

        case 2:
            if(imoveis.length > 0) {
                for(let i = 0; i < imoveis.length; i++) {
                    if(imoveis[i].garagemQA > 0) {
                        alert(
                            'Imóvel: ' + (i + 1) +
                            '\nProprietário: ' + imoveis[i].nome +
                            '\nQuantidade de quartos: ' + imoveis[i].quartos +
                            '\nQuantidade de banheiros: ' + imoveis[i].banheiro +
                            '\nPossui garagem: ' + imoveis[i].garagem +
                            '\nQuantidade de garagem: ' + imoveis[i].garagemQA 
                        )
                    } else {
                        alert(
                            'Imóvel: ' + (i + 1) +
                            '\nProprietário: ' + imoveis[i].nome +
                            '\nQuantidade de quartos: ' + imoveis[i].quartos +
                            '\nQuantidade de banheiros: ' + imoveis[i].banheiro +
                            '\nPossui garagem: ' + imoveis[i].garagem 
                        )
                    }
                }
            } else {
                alert('Não há dados cadastrados')
            }
            break

        case 3:
            alert('Programa encerrado...')
            break
            
        default:
            alert('Opção Inválida...')
    }
} while(menu !== 3)