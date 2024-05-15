let nome = prompt('Qual nome do piloto?')
let velocidade = 0
let confirmacao = ''

while(confirmacao !== true) {
    velocidade = parseInt(prompt(
        'Velocidade inicial da nave: 0 Km' +
        '\nQual velocidade gostaria de acelerar a nave?'
    ))
    confirmacao = confirm(
        'Confirmar essa velocidade: ' + velocidade
    )
}

if(velocidade >= 100) {
    alert(
        'Olá, ' + nome +
        '\nVelocidade atual: ' + velocidade + ' Km' +'\nVelocidade perigosa. Controle automático forçado.' 
    )
} else if (velocidade >= 80 && velocidade < 100) {
    alert(
        'Olá, ' + nome +
        '\nVelocidade atual: ' + velocidade + ' Km'+
        '\nVelocidade alta. Considere diminuir.' 
    )
} else if ( velocidade >= 40 && velocidade < 80) {
    alert(
        'Olá, ' + nome +
        '\nVelocidade atual: ' + velocidade + ' Km'+ '\nParece uma boa velocidade para manter.' 
    )
} else if(velocidade < 40  && velocidade > 0) {
    alert(
        'Olá, ' + nome +
        '\nVelocidade atual: ' + velocidade + ' Km'+ '\nVocê está devagar. podemos aumentar mais.'
    )
} else {
    alert(
        'Olá, ' + nome +
        '\nVelocidade atual: 0 Km' +
        '\nNave está parada. Considere partir ' 
    )
}