let nomeDaNave = prompt('Qual o nome da espaço nave')
let nomeInveritdo = ''

for(let i = nomeDaNave.length - 1; i >= 0; i--) {
    if(nomeDaNave[i] === 'e') {
        break
    }
    nomeInveritdo += nomeDaNave[i]
}

alert(
    'Nome da nave: ' + nomeDaNave +
    '\nNome Invertido: ' + nomeInveritdo 
)