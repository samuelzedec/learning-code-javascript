let i = 0
let nomeDaNave = prompt('Qual o nome da sua nave?')
let dobra = Number(prompt(
    'Deseja realizar uma dobra espacial?' +
        '\n[1] - Sim' +
        '\n[2] - Não'
))

while(dobra !== 2) {
    dobra = Number(prompt(
        'Deseja realizar a próxima dobra espacial?' +
        '\n[1] - Sim' +
        '\n[2] - Não'
    ))
    i++
}

alert(
    'Nome da Nave: ' + nomeDaNave +
    '\nDobras espaciais: ' + i
)