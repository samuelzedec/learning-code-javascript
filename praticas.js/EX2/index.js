let condicao = confirm(
    'Quer saber a diferença de idade de alguém:'
)

let nomeMaisVelha = ''
let idadeMaisVelha = 0

let nomeMaisNova = ''
let idadeMaisNova = 0
let diferenca = 0

if(condicao === true) {
    nomeMaisVelha = prompt('Qual o nome da pessoa mais velha?')
    idadeMaisVelha = parseFloat(prompt('Qual a idade da pessoa mais velha?'))
    nomeMaisNova = prompt('Qual o nome da pessoa mais nova?')
    idadeMaisNova = parseFloat(prompt('Qual a idade da pessoa mais nova?'))
    
    diferenca = idadeMaisVelha - idadeMaisNova

    alert(
        'Dados:' +
        '\nNome: ' + nomeMaisVelha +
        '\nIdade: ' + idadeMaisVelha +
        '\n\nNome: ' + nomeMaisNova +
        '\nIdade: ' + idadeMaisNova +
        '\n\n' + nomeMaisVelha + ' é ' + diferenca + ' anos mais velha que ' + nomeMaisNova 
    )
} else {
    alert('Programa encerrado')
}