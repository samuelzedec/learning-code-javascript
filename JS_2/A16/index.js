function areaDoTriangulo() {
    let base = Number(prompt('Digite o valor da base:'))
    let altura = Number(prompt('Digite o valor da altura:'))
    return (base * altura) / 2 
}

function areaDoRetangulo() {
    let base = Number(prompt('Digite o valor da base:'))
    let altura = Number(prompt('Digite o valor da altura:'))
    return base * altura
}

function areaDoQuadrado() {
    let lado = Number(prompt('Digite o valor do lado:'))
    return Math.pow(lado, 2)
}

function areaDoTrapezio() {
    let baseMaior = Number(prompt('Digite o valor da base maior:'))
    let baseMenor = Number(prompt('Digite o valor da base menor:'))
    let altura = Number(prompt('Digite o valor da altura:'))
    return ((baseMaior + baseMenor) * altura) / 2 
}

function areaDoCirculo() {
    let raio = Number(prompt('Digite o valor do raio:'))
    return 3.14 * (Math.pow(raio, 2))
}

//Interação com usuário
function exibirMenu() {
    return Number(prompt(
        'Escolha a opção desejada:\n' +
        '[1] - Área do triângulo\n' +
        '[2] - Área do retângulo\n' +
        '[3] - Área do quadrado\n' +
        '[4] - Área do trapézio\n' +
        '[5] - Área do círculo\n' +
        '[6] - Encerrar o programa'
    ))
}

function executar() {
    let opcao = 0
    let resultado

    do {
        opcao = exibirMenu()

        switch(opcao) {
            case 1:
                resultado = areaDoTriangulo()
                break
            case 2:
                resultado = areaDoRetangulo()
                break
            case 3:
                resultado = areaDoQuadrado()
                break
            case 4:
                resultado = areaDoTrapezio()
                break
            case 5:
                resultado = areaDoCirculo()
                break
            case 6:
                alert('Programa encerrado...')
                break
            default:
                alert('Opção Inválida')
        }

        if(resultado) {
            alert('Resultado: ' + resultado)
        } else {
            alert('Não foi possível fazer o cálculo')
        }
    } while(opcao !== 6)
}

executar()