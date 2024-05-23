let nomeDaNave = prompt('Qual nome da espaço nave?')
let caracter = prompt('Qual caracter deseja trocar')
let novoCaracter = prompt('Qual o novo carater')
let novoNome = ''

for(let i = 0; i < nomeDaNave.length; i++) {
    if(nomeDaNave[i] === caracter) {
        novoNome += novoCaracter
    } else {
        novoNome += nomeDaNave[i]
    }
}

alert(`Novo nome da espaço nave: ${novoNome}`)