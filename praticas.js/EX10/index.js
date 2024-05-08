let palavra = prompt('Digite uma palavra:')
let letra = prompt('Qual letra você escolhe')
let repetido = 0

for(let i = 0; i < palavra.length; i++) {
    if(palavra[i] === letra) {
        repetido++
    }
}

alert(`A letra (${letra}) tem ${repetido} vezes na palavra (${palavra})`)