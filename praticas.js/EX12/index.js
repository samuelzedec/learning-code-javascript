let moeda = 0

do {
    escolha = Number(prompt(
        'Digite a moeda para conversão:' +
        '\n[1] - Real para Dolár' +
        '\n[2] - Real para Euro' +
        '\n[3] - Real para Libra' +
        '\n[4] - Sair'
    ))

    if(escolha !== 4) {
        moeda = Number(prompt('Quantos reais você tem?'))
    }

    switch(escolha) {
        case 1:
            moeda /= 4
            alert(`Você tem ${moeda} dolares`)
            break
        case 2:
            moeda /= 6
            alert(`Você tem ${moeda} euros`)
            break
        case 3:
            moeda /= 8
            alert(`Você tem ${moeda} libras`)
            break
        case 4:
            alert('Programa Encerrado...')
            break
        default:
            alert('Opção invalida')
    } 
} while(escolha !== 4)
