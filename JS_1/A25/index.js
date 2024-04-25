//Entrada
const nome = prompt('Opa turista! Qual seu nome?')
let continuar = prompt('Você já visitou alguma cidade? (Sim/Não)')
let nomeCidade = ''
let cidadeVisitada = ''
let contagem = 0

//Processamento e Saída
while(continuar === 'Sim') {
    nomeCidade = prompt('Qual cidade você visitou?')
    cidadeVisitada += '\n- ' + nomeCidade
    contagem++
    continuar = prompt('Você visitou outra cidade? (Sim/Não)')

    if(continuar === 'Não') {
        alert(
            'Seu nome: '+ nome +
            '\nQuantidade de cidades: ' + contagem +
            '\nNome das cidades: ' + cidadeVisitada
        )
    }
}