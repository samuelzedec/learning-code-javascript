const palavra = prompt('Qual palavra você deseja verificar')
let palavraInvertida = ''

//O "- 1" quer dizer que vai começar da última letra
for(let i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida += palavra[i]
}

if(palavra === palavraInvertida) {
    alert(
        'A palavra possui o palídromo:' +
        '\npalavra: ' + palavra +
        '\npalídromo: ' + palavraInvertida
    )
} else {
    alert(
        'A palavra não possui palídromo:' +
        '\npalavra: ' + palavra +
        '\npalvra invertida: ' + palavraInvertida
    )
}

