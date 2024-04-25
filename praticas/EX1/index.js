let escolha = 0
let n1 = 0
let n2 = 0
alert('Calculadora de 4 operações')

do {
    
    escolha = parseFloat(prompt(
        'Digite o número da opção:\n' +
        '1 - Soma\n' +
        '2 - Subtração\n' +
        '3 - Multiplição\n' +
        '4 - Divisão\n' +
        '5 - Sair'
    ))
    

    switch(escolha) {
        case 1:
            n1 = parseFloat(prompt('Digite o primeiro número:'))
            n2 = parseFloat(prompt('Digite o segundo número:'))
            alert('Soma = ' + (n1 += n2))
            break

        case 2:
            n1 = parseFloat(prompt('Digite o primeiro número'))
            n2 = parseFloat(prompt('Digite o segundo número:'))
            alert('Subtração = ' + (n1 -= n2))
            break

        case 3:
            n1 = parseFloat(prompt('Digite o primeiro número'))
            n2 = parseFloat(prompt('Digite o segundo número:'))
            n1 *= n2
            alert('Multiplicação = ' + (n1 *= n2))
            break

        case 4:
            n1 = parseFloat(prompt('Digite o primeiro número'))
            n2 = parseFloat(prompt('Digite o segundo número:'))
            n1 /= n2
            alert('Divisão = ' + (n1 /= n2))
            break

        case 5:
            alert('Programa Encerrado...')
            break

        default:
            alert('Opção Invalída')
    }
} while(escolha !== 5)