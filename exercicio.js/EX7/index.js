let nomeDoTurista = prompt('Olá turista, qual seu nome?')
let confirmacao = Number(prompt(
    'Você já visitou alguma cidade?' + 
    '\n[1] - Sim' +
    '\n[2] - Não'
))
let i = 0
let cidadeVisitada = ''

while(confirmacao === 1) {
    let nomeCidade = prompt('Qual o nome da cidade?')
    cidadeVisitada += '\n- ' + nomeCidade
    i++
    confirmacao = Number(prompt(
        'Você já visitou alguma outra cidade?' + 
        '\n[1] - Sim' +
        '\n[2] - Não'
    ))
    if(confirmacao === 2) {
        alert(
            'Seu nome é: ' + nomeDoTurista +
            '\nQuantidade de cidades: ' + i +
            '\nNome das cidades: ' + cidadeVisitada
        )
    }
}
