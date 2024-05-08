let sala = []
let menu = ''
let turma = prompt('Qual a turma cadastrada?')
let matricula = 0

do {
    menu = Number(prompt(
        'Cadastro dos alunos da turma: ' + turma +
        '\nNúmero de alunos: ' + sala.length +
        '\n\nDigite a opção desejada: ' +
        '\n[1] - Ver alunos cadastrados' +
        '\n[2] - Cadastrar aluno' +
        '\n[3] - Encerrar programa'
    ))

    switch(menu) {
        case 1:
            if(sala.length > 0) {
                for(let i = 0; i < sala.length; i++) {
                    matricula = i + 1
                    alert(
                        'Registro do aluno(a): ' + matricula +
                        '\nNome do aluno(a): ' + sala[i].nome +
                        '\nIdade do aluno(a): ' + sala[i].idade +
                        '\nSexo do aluno(a): ' + sala[i].sexo
                    )
                }
            } else {
                alert('Não há alunos cadastro na turma ' + turma)
            }
            break
        case 2:
            let dadosDoAluno = {}
            dadosDoAluno.nome = prompt('Qual o nome do aluno(a)?')
            dadosDoAluno.idade = Number(prompt('Qual a idade do aluno(a)?'))
            dadosDoAluno.sexo = prompt('Qual o sexo do aluno(a)?')

            let confirmarCadastro = confirm(
                'Confirmer os dados:' +
                '\nNome do aluno(a): ' + dadosDoAluno.nome +
                '\nIdade do aluno(a): ' + dadosDoAluno.idade +
                '\nSexo do aluno(a): ' + dadosDoAluno.sexo
            )

            if(confirmarCadastro) {
                alert('Dados cadastrados com sucesso')
                sala.push(dadosDoAluno)
            } else {
                alert('Cadastro cancelado')
            }
            break
        case 3:
            alert('Programa encerrado...')
            break
        default:
            alert('Opção Inválida')
    }
}while(menu !== 3)