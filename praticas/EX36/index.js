function createLabel(htmlFor, text) {
  const label = document.createElement('label')
  label.htmlFor = htmlFor
  label.innerText = text
  return label
}

function createInput(id, name, value = '', type = 'text') {
  const input = document.createElement('input')
  input.id = id
  input.name = name
  input.value = value
  input.type = type
  return input
}

const form = document.getElementById('devForm')
const developers = []
const addTechBtn = document.getElementById('addTechBtn')
let inputRows = 0

addTechBtn.addEventListener('click', function() {
  const stackInputs = document.getElementById('stackInputs')
  const newRow = document.createElement('li')
  const rowIndex = inputRows
  inputRows++
  newRow.id = 'newRow-' + rowIndex
  newRow.className = 'inputRow'

  //Nome da tecnologia
  const labelNameTech = createLabel('techName-' + rowIndex, 'Nome da tecnologia: ')
  const inputNameTech = createInput('techName-' + rowIndex, 'techName')
  const wordWrapOne = document.createElement('br')

  //Experiência
  const experienceName = createLabel(null, 'Experiência: ')
  const expLabelOne = createLabel('radioName-' + rowIndex + '.1', '0-2 Anos | ')
  const expInputOne = createInput('radioName-' + rowIndex + '.1', 'radioExp-' + rowIndex, '0-2 anos', 'radio')
  const expLabelTwo = createLabel('radioName-' + rowIndex + '.2', '3-4 Anos | ')
  const expInputTwo = createInput('radioName-' + rowIndex + '.2', 'radioExp-' + rowIndex, '3-4 anos', 'radio')
  const expLabelThree = createLabel('radioName-' + rowIndex + '.3', '5+ Anos')
  const expInputThree = createInput('radioName-' + rowIndex + '.3', 'radioExp-' + rowIndex, '5+ anos', 'radio')

  newRow.append(labelNameTech, inputNameTech, wordWrapOne, experienceName, expInputOne, expLabelOne, expInputTwo, expLabelTwo, expInputThree, expLabelThree)
  stackInputs.appendChild(newRow)
})

form.addEventListener('submit', function(ev) {
  ev.preventDefault()
  const nameDeveloper = document.getElementById('fullname')
  const inputRow = document.querySelectorAll('.inputRow')
  const technologies = []
  
  inputRow.forEach(function(row) {
    const name = row.querySelector('input[name = "techName"]').value
    const expTech = row.querySelector('input[type = "radio"]:checked').value
    technologies.push({name, expTech})
  })

  const newDev = {name: nameDeveloper.value, technologies: technologies}
  developers.push(newDev)
  console.log(developers)

  nameDeveloper.value = ''
  inputRow.forEach(function(row) {
    row.remove()
  }) 
})