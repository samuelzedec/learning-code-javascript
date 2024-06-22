function labelVancacy(text, htmlFor) {
  const label = document.createElement('label')
  label.innerText = text
  label.htmlFor = htmlFor
  return label
}

function inputVacancy(id, name, value = '', type = 'text') {
  const input = document.createElement('input')
  input.id = id
  input.name = name
  input.value = value
  input.type = type
  return input
}

const addVancacyBtn = document.getElementById('addVancacyBtn')
let inputRow = 0

addVancacyBtn.addEventListener('click', function(ev) {
  const listVacancy = document.getElementById('listVacancy')
  const newRow = document.createElement('li')
  const indexRow = inputRow
  inputRow++

  newRow.id = 'vacancyRow-' + indexRow
  newRow.className = 'vacancyRowList'

  //label para o nome da vaga
  const vacancyNameLabel = labelVancacy('Nome da vaga: ', 'vancacyId-' + indexRow)
  const vacancyNameInput = inputVacancy('vancacyId-' + indexRow, 'vancacyName', null)
  const wordWrap1 = document.createElement('br')
  const wordWrap2 = document.createElement('br')
  const wordWrap3 = document.createElement('br')
  const wrap = document.createElement('hr')
  wrap.className = 'hrPrincipal'

  //Label para escrever sobre a vaga
  const vancacySalaryLabel = labelVancacy('Salário: ', 'vancacySalary-' + indexRow)
  const vancacySalaryInput = inputVacancy('vancacySalary-' + indexRow, 'vancacySalaryName', null)

  //Label papa experiencia minima
  const expVancacy = labelVancacy('Experiência minima: ')
  const expRadioLabel1 = labelVancacy('0-2 anos', 'exp-' + indexRow + '.1')
  const expRadioInput1 = inputVacancy('exp-' + indexRow + '.1', 'Exp' + indexRow, '0-2 anos', 'radio')
  const expRadioLabel2 = labelVancacy('3-5 anos', 'exp-' + indexRow + '.2')
  const expRadioInput2 = inputVacancy('exp-' + indexRow + '.2', 'Exp' + indexRow, '3-4 anos', 'radio')
  const expRadioLabel3 = labelVancacy('5+ anos', 'exp-' + indexRow + '.3')
  const expRadioInput3 = inputVacancy('exp-' + indexRow + '.3', 'Exp' + indexRow, '5+ anos', 'radio')

  //Botão de remover
  const removeBtn = document.createElement('button')
  removeBtn.type = 'button'
  removeBtn.innerText = 'Remover Vaga'
  removeBtn.addEventListener('click', function(ev) {
    listVacancy.removeChild(newRow)
  })

  newRow.append(vacancyNameLabel, vacancyNameInput, wordWrap1, vancacySalaryLabel, vancacySalaryInput, wordWrap2, expVancacy,expRadioLabel1, expRadioInput1, expRadioLabel2, expRadioInput2, expRadioLabel3, expRadioInput3, wordWrap3, removeBtn, wrap)
  listVacancy.appendChild(newRow)
})

const vacancy = []
const form = document.getElementById('vacancyForm')
form.addEventListener('submit', function(ev) {
  ev.preventDefault()
  const nameRecrut = document.getElementById('recrut')
  const inputRows = this.querySelectorAll('.vacancyRowList')
  const about = []

  inputRows.forEach(function(row) {
    const nameVacancy = row.querySelector('input[name = "vancacyName"]').value
    const salaryVacancy = row.querySelector('input[name = "vancacySalaryName"]').value
    const exp = row.querySelector('input[type = "radio"]:checked').value

    const newVancacy = {name: nameVacancy, salary: salaryVacancy, exp: exp}
    about.push(newVancacy)
  })
  vacancy.push({recrutador: nameRecrut.value, vacancies: about})

  nameRecrut.value = ''
  inputRows.forEach(function(row) {
    row.remove()
  })

  console.log(vacancy)
})