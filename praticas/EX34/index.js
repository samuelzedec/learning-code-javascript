const vacancies = []

function createVacancy() {
  const name = prompt('Insira o nome da vaga:')
  const description = prompt('Insira uma breve descrição sobre a vaga')
  const deadline = prompt('Insira a data limite da vaga')
  const confirmation = confirm(
    `Confirme se os dados estão corretos: \nNome: ${name} \nDescrição: ${description} \nData limite: ${deadline}`
  )
2
  if(confirmation) {
    const vacancy = {name, description, deadline, candidates: []}
    alert('Vaga castrada com sucesso...')
    vacancies.push(vacancy)
  } else {
    alert('Cancelamento no cadastro da vaga...')
  }
}

function listVacancies() {
  if(vacancies.length) {
    const list = vacancies.reduce(function(generalList, vacancy, index) {
      generalList += (index + 1) + '. '
      generalList += vacancy.name
      generalList += ' (' + vacancy.candidates.length + (vacancy.candidates.length === 1 ? ' candidato).\n' : ' candidatos).\n')

      return generalList
    }, '')
    alert(list)
  } else {
    alert('Não há vagas cadastradas...')
  }
}

function viewVacancy() {
  const index = Number(prompt('Informe o índice da vaga que deseja vizualizar')) - 1
  if(vacancies[index]) {
    const view = vacancies[index]
    const candidates = view.candidates.reduce(function(candidateList, name) {
      return candidateList += `- ${name}\n`
    }, '')
    let choice = 0
    do{
      choice = Number(prompt(
        'Nome da vaga: ' + vacancies[index].name +
        '\nDescrição da vaga: ' + vacancies[index].description +
        '\nData Limite: ' + vacancies[index].deadline +

        '\nEscolha: ' +
        '\n[1] - Ver lista de candidatos' +
        '\n[2] - Sair'
      ))

      switch(choice) {
        case 1:
          alert('Lista de candidatos:\n' + candidates)
          break
        case 2:
          alert('OK, saindo...')
          break
        default:
          alert('Opção Incorreta')
          break
      }
    } while(choice !== 2)
  } else {
    alert('Vaga não existente...Informe outro índice')
  }
}

function registerCandidate() {
  const index = Number(prompt('Informe o índice da vaga que deseja cadastrar o candidato'))

  if(vacancies[index]) {
    const nameCandidate = prompt('Informe o nome do candidato:')
    const confirmation = confirm(
      'Confirme os dados: ' +
      '\nNome da vaga: ' + vacancies[index].name +
      '\nDescrição da vaga: ' + vacancies[index].description +
      '\nData limite: ' + vacancies[index].deadline + 
      '\nNome do candidato: ' + nameCandidate 
    )

    if(confirmation) {
      alert('Cadastro do candidato com sucesso')
      vacancies[index].candidates.push(nameCandidate)
    } else {
      alert('Cadastro cancelado')
    }
  } else {
    alert('Vaga não existente para cadastro')
  }
}

function deleteVacancy() {
  const index = Number(prompt('Informe o índice da vaga que deseja excluir')) - 1
  if(vacancies[index]) {
    const confirmation = confirm(
      'Confirme os dados da vaga a ser excluída: ' +
      '\nNome da vaga: ' + vacancies[index].name +
      '\nDescrição da vaga: ' + vacancies[index].description +
      '\nData limite: ' + vacancies[index].deadline 
    )

    if(confirmation) {
      vacancies.splice(index, 1)
      alert('Vaga excluída com sucessso!')
    } else {
      alert('Vaga não excluída...')
    }
  } else {
    alert('Vaga não existente')
  }
}

function menuList() {
  let menu = 0
  do {
    menu = Number(prompt(
      'Informe a opção desejada: ' +
      '\n[1] - Listar Vagas' +
      '\n[2] - Criar uma nova vaga' +
      '\n[3] - Vizualizar uma vaga' +
      '\n[4] - Cadastrar candidato a uma vaga' +
      '\n[5] - Excluir vaga' +
      '\n[6] - Sair do programa' 
    ))

    switch(menu) {
      case 1:
        listVacancies()
        break
      case 2:
        createVacancy()
        break
      case 3:
        viewVacancy()
        break
      case 4:
        registerCandidate()
        break
      case 5:
        deleteVacancy()
        break
      case 6:
        alert('Encerrando o programa...')
        break
      default:
        alert('Opção incorreta... Tente Novamente')
    }
  } while (menu !== 6)
}
menuList()