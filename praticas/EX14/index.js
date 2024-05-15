let sala = [[], [], []]
const turma = prompt('Série da turma?')
let decisao = 0

function menu() {
    return Number(prompt(
        'Cadastro dos alunos da turma: ' + turma +
        '\nNúmero de alunos: ' + sala[2].length +
        '\n\nDigite a opção desejada: ' +
        '\n[1] - Cadastro de aluno(a)' +
        '\n[2] - Ver turma completa' +
        '\n[3] - Ver alunos cadastrados' +
        '\n[4] - Ver alunas cadastradas' +
        '\n[5] - Encerrar programa'
    ))
}

function envioDeAluno() {
    let aluno = {}
    let confirmacao

    aluno.sexo = prompt('Sexo do aluno ou aluna? \n[M] - Masculino \n[F] - Feminino')
    if(aluno.sexo === 'M') {
        aluno.nome = prompt('Nome do aluno?')
        aluno.idade = prompt('Idade do aluno?')
    } else {
        aluno.nome = prompt('Nome da aluna?')
        aluno.idade = prompt('Idade da aluna?')
    }

    if(aluno.sexo === 'M') {
        confirmacao = confirm(
            'Confirme os dados: ' +
            '\nNome: ' + aluno.nome +
            '\nIdade: ' + aluno.idade +
            '\nSexo: Masculino'
        )

        if(confirmacao) {
            sala[0].push(aluno)
            sala[2].push(aluno)
            alert('Dados enviados com sucesso!')
        } else {
            alert('Cancelamento no envio de Dados!')
        }
    } else {
        confirmacao = confirm(
            'Confirme os dados: ' +
            '\nNome: ' + aluno.nome +
            '\nIdade: ' + aluno.idade +
            '\nSexo: Feminino'
        )

        if(confirmacao) {
            sala[1].push(aluno)
            sala[2].push(aluno)
            alert('Dados enviados com sucesso!')
        } else {
            alert('Cancelamento no envio de Dados!')
        }
    }
}

function verTurmaCompleta() {
    if(sala[2].length > 0) {
        for(let i = 0; i < sala[2].length; i++) {
            alert(
                'Matrícula: ' + (1 + i) +
                '\nNome: ' + sala[2][i].nome +
                '\nIdade: ' + sala[2][i].idade +
                '\nSexo: ' + sala[2][i].sexo
            )
        }
    }
}

function verTurmaM() {
    if(sala[0].length > 0) {
        for(let i = 0; i < sala[0].length; i++) {
            alert(
                'Nome do aluno: ' + sala[0][i].nome +
                '\nidade do Aluno: ' + sala[0][i].idade +
                '\nSexo do aluno: Masculino'
            )
        }
    } else {
        alert('Não há alunos cadastrados')
    }
}  

function verTurmaF() {
    if(sala[1].length > 0) {
        for(let i = 0; i < sala[1].length; i++) {
            alert(
                'Nome da aluna: ' + sala[1][i].nome +
                '\nidade da Aluna: ' + sala[1][i].idade +
                '\nSexo da aluna: Feminino'
            )
        }
    } else {
        alert('Não há alunas cadastradas')
    }
}

do {
    decisao = menu()

    switch(decisao) {
        case 1:
            envioDeAluno()
            break
        case 2:
            verTurmaCompleta()
            break
        case 3:
            verTurmaM()
            break
        case 4:
            verTurmaF()
            break
        case 5:
            alert('Programa encerrado!')
            break
        default:
            alert('Opção Inválida. Tente Novamente!')
    }
} while(decisao !== 5)