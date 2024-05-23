//Array que guarda as turmas
const escola = []
/*
    Função usada para criar uma turma:
    - serie: guardar a serie da turma
    - sala: guarda a sala da turma
    - turno: guarda o turno e ajuda a fazer a divisao por turnos
*/ 
function criarTurma() {
    const serie = prompt('Informe a serie que deseja cadastrar:')
    const sala = prompt('Informe o número da sala da turma:')
    const turno = prompt('Informe o turno da turma: \n• Matutino\n• Vespertino\n• Noturno')

    const confirmacao = confirm(
        'Confirme se os dados da turma estão corretos:' +
        '\nTurma: ' + serie +
        '\nSala: ' + sala +
        '\nTurno: ' + turno
    )

    if(confirmacao) {
        alert('Confirmado, turma cadastra no banco de dados...')
        //turma: é usado para guardar cada valor em um objeto e jogar no array
        const turma = {serie, sala, turno, alunos: []}
        escola.push(turma)
    } else {
        alert('Cancelado, turma não cadastrada no banco de dados...')
    }
}

/*
    Essa função é usada para ver uma lista rapida das turmas que a escola tem, exibindo o índice no array, a turma e a quantidade de alunos e o turno
*/
function listarTurma() {
    if(escola.length > 0) {
        const turmaEmTexto = escola.reduce(function(textoFinal, turmaAtual, indice) {
            textoFinal += indice + '. Turma: '
            textoFinal += turmaAtual.serie + ' ('
            textoFinal += turmaAtual.alunos.length + (turmaAtual.alunos.length === 1 ? ' aluno)\n' : ' alunos) ')
            textoFinal += turmaAtual.turno + '\n'
            return textoFinal
        }, '')
        alert(turmaEmTexto)
    } else {
        alert('Não há turmas cadastradas')
    }
}

/*
    Com essa função vamos exibir a turma por completo com cada dado sobre ela
*/
function exibirTurma() {
    const i = prompt('Informe a o índice da turma:')
    if(i >= 0 && i < escola.length) {
        const turma = escola[i]
        const alunosEmTexto = turma.alunos.reduce(function(textoFinal, alunoAtual) {
            textoFinal += '\n - ' + alunoAtual 
            return textoFinal
        }, '')

        alert(
            'Índice: ' + i +
            '\nSérie: ' + escola[i].serie +
            '\nSala: ' + escola[i].sala +
            '\nTurno: ' + escola[i].turno + 
            '\nQuantidade de alunos: ' + escola[i].alunos.length +
            '\nNome dos alunos: ' + alunosEmTexto
        )
    } else {
        alert('Turma não cadastrada no banco de dados')
    }
}

/*
    Essa função vamos cadastrar o aluno de acordo com o indice da turma
*/
function cadastrarAluno() {
    const nomeDoAluno = prompt('Informe o nome do(a) aluno(a):')
    const i = Number(prompt('Informe o índice da turma:'))

    if(i >= 0 && i < escola.length) {
        const confirmacao = confirm (
            'Confirme se os dados informados estão corretos:' +
            '\nNome: ' + nomeDoAluno +
            '\nSérie: ' + escola[i].serie
        )
    
        if(confirmacao) {
            alert('Matricula feita com sucesso...')
            escola[i].alunos.push(nomeDoAluno)
        } else {
            alert('Cancelamento da matrícula feito com sucesso')
        }
    } else {
        alert('Sala não cadastrada no banco de dados')
    }
}
/*
    Aqui usamos a propriedade turno para dividir as turma e exibir turno por turno
*/
function dividirTurma() {
    const turnosDivididos = escola.reduce(function(acumulador, turma) {
        if(turma.turno === 'Matutino') {
            acumulador[0].push(turma.serie)
        } else if(turma.turno === 'Vespertino') {
            acumulador[1].push(turma.serie)
        } else {
            acumulador[2].push(turma.serie)
        }
        return acumulador
    }, [[],[],[]])

    if(turnosDivididos[0].length > 0) {
        turnosDivididos[0].forEach(function(elemento) {
            alert('Turma no turno Matutino: ' + elemento)
        })
    } else {
        alert('Não há turma cadastrada no turno Matutino')
    }

    if(turnosDivididos[1].length > 0) {
        turnosDivididos[1].forEach(function(elemento) {
            alert('Turma no turno Vespertino: ' + elemento)
        })
    } else {
        alert('Não há turma cadastrada no turno Vespertino')
    }

    if(turnosDivididos[2].length > 0) {
        turnosDivididos[2].forEach(function(elemento) {
            alert('Turma no turno Noturno: ' + elemento)
        })
    } else {
        alert('Não há turma cadastrada no turno Noturno')
    }
}

let opcao;

do {
    opcao = prompt(
        'Menu:\n' +
        '1. Criar Turma\n' +
        '2. Listar Turmas\n' +
        '3. Exibir Turma\n' +
        '4. Cadastrar Aluno\n' +
        '5. Dividir Turma por Turno\n' +
        '6. Sair\n' +
        'Escolha uma opção:'
    );

    switch (opcao) {
        case '1':
            criarTurma()
            break
        case '2':
            listarTurma()
            break
        case '3':
            exibirTurma()
            break
        case '4':
            cadastrarAluno()
            break
        case '5':
            dividirTurma()
            break
        case '6':
            alert('Saindo do programa...')
            break
        default:
            alert('Opção inválida. Por favor, escolha uma opção válida.')
    }
} while (opcao !== '6')