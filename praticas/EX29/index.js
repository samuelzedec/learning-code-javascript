function validar() {
    let resultado = Number(prompt('Digite a idade do aluno:'))
    while(resultado < 0 || resultado > 100) {
        alert('Número Invalido')
        resultado = Number(prompt('Digite a idade do aluno:'))
    }
    return resultado
}

function executar() {
    const array = []
    let maior = -99999999999
    let menor = 99999999999
    let media = 0

    alert('Insira as idades dos alunos')
    for(let i = 0; i < 5; i++) {
        array[i] = validar()
        if(array[i] > maior) {
            maior = array[i]
        } 
        if(array[i] < menor) {
            menor = array[i]
        }
        media += array[i]
    }
    media /= array.length

    alert(
        'Média: ' + media +
        '\nMaior: ' + maior +
        '\nMenor: ' + menor
    )
}
executar()