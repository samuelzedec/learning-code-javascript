let nomeDoPiloto = ''
let nomeDaNave = ''
let velocidadeDaNave = 0

function aceleracaoDaNave() {
    alert('Velocidade aumenta em 5km/s')
    return velocidadeDaNave += 5
}

function desaceleracaoDaNave() {
    if(velocidadeDaNave > 0) {
        alert('Velocidade diminuida em 5km/s')
        return velocidadeDaNave -= 5
    } else {
        alert('Não é possível desacelerar a nave!')
    }
}

function menuIncial() {
    nomeDoPiloto = prompt('Olá, qual seu nome piloto?')
    nomeDaNave = prompt('Qual nome da sua nave? ' + nomeDoPiloto)
    let menu = 0

    do {
        menu = Number(prompt(
            'Nome da nave: ' + nomeDaNave +
            '\nNome do piloto: ' + nomeDoPiloto +
            '\nVelocidade atual da nave: ' + velocidadeDaNave + 'km/s' +
            '\n\nDigite a opção desejada: ' +
            '\n[1] - Acelerar a nave' +
            '\n[2] - Desacelarar a nave' +
            '\n[3] - Sair do programa'
        ))

        switch(menu) {
            case 1:
                aceleracaoDaNave()
                break
            case 2:
                desaceleracaoDaNave()
                break
            case 3:
                alert('Programa encerrado')
                break
            default:
                alert('Opção Inválida')
        }
    } while(menu !== 3)
}

menuIncial()