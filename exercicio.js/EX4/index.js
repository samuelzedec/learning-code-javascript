let distancia = 0
let menu

do {
    distancia = parseFloat(prompt(
        'Qual a distância que deseja converter'
    ))

    menu = prompt(
        'CONVERSÃO DE ANOS LUZ' +
        '\nDigite a sigla da unidade desejada:' +
        '\n[PC] - Parsec' +
        '\n[AU] - Unidade astronônima' +
        '\n[KM] - Quilômetros' +
        '\n[S] - Sair'
    )

    switch(menu) {
        case 'PC':
            alert(
                'Distância digitada: ' + distancia + 
                '\nDistância convertida: ' + (distancia *= 0.306601) + ' Persec'
            )
            break
        case 'AU':
            alert(
                'Distância digitada: ' + distancia + 
                '\nDistância convertida: ' + (distancia *= 63241.1) + ' Unidade Astronônima'
            )
            break
        case 'KM':
            alert(
                'Distância digitada: ' + distancia + 
                '\nDistância convertida: ' + (distancia *= 9.5 * Math.pow(10, 12)) + ' Quilômetros'
            )
            break
        case 'S':
            alert('Programa encerrado...')
            break
        default:
            alert(
                'Distância digitada: ' + distancia + 
                '\nUnidade não identificada: Conversão fora do escopo'
            )
    }
} while (menu !== 'S')