function addInput() {
  const ul = document.getElementById('inputs')

  //Função para criar um novo elemento, basta por a TAG nos parâmetros 
  const newLi = document.createElement('li')
  newLi.className = 'list-item'
  
  const newLabel = document.createElement('label')
  newLabel.innerText = 'novo input:' 


  const newInput = document.createElement('input')
  newInput.type = 'text'
  newInput.placeholder = 'Insira seu numero do cartão'
  newInput.name = 'inputJS'

  //appendChild: serve para adicionar ao outro elemento
  newLi.appendChild(newLabel)
  newLi.appendChild(newInput)
  ul.appendChild(newLi)
}