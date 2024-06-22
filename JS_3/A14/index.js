function createLabel(text, htmlFor) {
  const label = document.createElement('label')
  label.htmlFor = htmlFor
  label.innerText = text
  return label
}

function createInput(id, value = '', name, type = 'text') {
  const input = document.createElement('input')
  input.id = id
  input.value = value
  input.name = name
  input.type = type
  return input
}

const addTechBtn =  document.getElementById('addTechBtn')
let inputRows = 0

addTechBtn.addEventListener('click', function(ev) {
  const stackInputs = document.getElementById('stackInputs')
  
  const newRow = document.createElement('li')
  const rowIndex = inputRows
  inputRows++
  newRow.id = 'inputRow-' + rowIndex
  newRow.className = 'inputRow'
  
  //Label para perguntar o nome da tecnologia
  const techNameLabel = createLabel('Nome: ', 'techName-' + rowIndex)
  const techNameInput = createInput('techName-' + rowIndex, '', 'techName')
  const wordWrap = document.createElement('br')
  
  //Input para pergunta o tempo de experiência do usuario
  const id = 'inputRadio-' + rowIndex
  const labelLanguage = createLabel('Experiência: ')
  const labelExp1 = createLabel('0-2 Anos', id + '.1')
  const inputExp1 = createInput(id + '.1', '0-2 anos', 'techExp-' + rowIndex, 'radio')
  const labelExp2 = createLabel('3-4 Anos', id + '.2')
  const inputExp2 = createInput(id + '.2', '3-4 anos', 'techExp-' + rowIndex, 'radio')
  const labelExp3 = createLabel('5+ Anos', id + '.3')
  const inputExp3 = createInput(id + '.3', '5+ anos', 'techExp-' + rowIndex, 'radio')
  
  //Botão de remover rowNew
  const removeTechBtn = document.createElement('button')
  removeTechBtn.type = 'button'
  removeTechBtn.innerText = 'Remover'
  removeTechBtn.addEventListener('click', function(ev) {
    stackInputs.removeChild(newRow)
  })
  
  newRow.append(techNameLabel, techNameInput, wordWrap, labelLanguage, labelExp1, inputExp1,labelExp2, inputExp2, labelExp3, inputExp3, removeTechBtn)
  stackInputs.appendChild(newRow)
})

const developers = []
const form = document.getElementById('devForm')
form.addEventListener('submit', function(ev) {
  ev.preventDefault()

  const fullnameInput = document.getElementById('fullname')
  const rowInputs = this.querySelectorAll('.inputRow')
  const technologies = []

  rowInputs.forEach(function(row) {
    const techNameInput = row.querySelector('input[name = "techName"]').value
    const techExp = row.querySelector('input[type="radio"]:checked').value
    technologies.push({name: techNameInput, exp: techExp})
  })

  const newDev = {name: fullnameInput.value, technologies: technologies}
  developers.push(newDev)

  fullnameInput.value = ''
  rowInputs.forEach(function(row) {
    row.remove()
  })
  console.log(developers)
})