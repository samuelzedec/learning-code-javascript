//Jogador 1
let nomeJogador1 = prompt('Qual nome do primeiro jogador:')
let ataqueJogador1 = parseFloat(prompt('Quantos pontos de ataque de ' + nomeJogador1 + '?'))

//Jogador 2
let nomeJogador2 = prompt('Qual nome do segundo jogador 2:')
let vidaJogador2 = parseFloat(prompt('Quantos pontos de vida possui ' + nomeJogador2 + ':'))
let defesaJogador2 = parseFloat(prompt('Quantos pontos de defesa possui ' + nomeJogador2 + ':'))
let escudoJogador2 = parseFloat(prompt(
    'Digite:' +
    '\n1 - Se o ' + nomeJogador2 + ' possui escudo' +
    '\n2 - Se o ' + nomeJogador2 + ' não possui escudo'
    ))
let danoCausado

//Processamento e Saída
if(ataqueJogador1 > defesaJogador2 && escudoJogador2 === 2) {
    danoCausado = ataqueJogador1 - defesaJogador2
    vidaJogador2 -= danoCausado

    alert(
        'Jogador 1: ' + nomeJogador1 +
        '\npontos de ataque: ' + ataqueJogador1 +

        '\n\nJogador 2: ' + nomeJogador2 +
        '\nPontos de Defesa: ' + defesaJogador2 +
        '\nPossui escudo: Não' +

        '\n\nDano causado: ' + danoCausado +
        '\nPontos de vida atualizada: ' + vidaJogador2 
    )
} else if(ataqueJogador1 > defesaJogador2 && escudoJogador2 === 1) {
    danoCausado = (ataqueJogador1 - defesaJogador2) / 2
    vidaJogador2 -= danoCausado

    alert(
        'Jogador 1: ' + nomeJogador1 +
        '\npontos de ataque: ' + ataqueJogador1 +

        '\n\nJogador 2: ' + nomeJogador2 +
        '\nPontos de Defesa: ' + defesaJogador2 +
        '\nPossui escudo: Sim' +

        '\n\nDano causado: ' + danoCausado +
        '\nPontos de vida do defensor: ' + vidaJogador2
    )
} else if(ataqueJogador1 == defesaJogador2 || ataqueJogador1 < defesaJogador2) {
    danoCausado = 0

    alert(
        'Jogador 1: ' + nomeJogador1 +
        '\npontos de ataque: ' + ataqueJogador1 +

        '\n\nJogador 2: ' + nomeJogador2 +
        '\nPontos de Defesa: ' + defesaJogador2 +

        '\n\nDano causado: ' + danoCausado +
        '\nPontos de vida do defensor: ' + vidaJogador2
    )
}