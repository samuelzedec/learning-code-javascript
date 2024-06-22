const input = document.getElementById('input')
document.getElementById('value').addEventListener('click', function() {
  input.value = input.value === '' ? 'Olá, Mundo!' : '' 
  //Caso o input esteja vazio, ele irá por a mensagem, caso não esteja ele irá ficar com uma string vazia
  console.log(input.value)
  console.log(input.getAttribute('value'))

  /*
    Diferença:
      • input.value = irá receber o value que for inserido pelo usuário
      • input.getAttribute('value') = irá receber o valor predefinido no value no HTML
  */
})

document.getElementById('type').addEventListener('click', function() {
  //input.type = input.type !== 'date' ? 'date' : 'text'
  input.setAttribute('type', 'radio')
  /*
    Parâmetros:
      • 1º) Irá configurar o atributo no HTML
      • 2º) Irá atribuir um valor ao atributo inserido no 1º parâmetro
  */
})

document.getElementById('placeholder').addEventListener('click', function() {
  input.placeholder = 'Digite algo...'
})

document.getElementById('disable').addEventListener('click', function() {
  input.setAttribute('disabled', !input.disabled)
  /*
    Parâmetros:
      • 1º) Irá configurar o atributo disabled (que tem seu valor booleano)
      • 2º) Irá negar o valor atual usando o operador NOT(!), então se tiver habilidato, irá ser 
      desabilidado
  */
})

document.getElementById('data').addEventListener('click', function() {
  const data = input.dataset.somethingElse
  /*
    obs: aqui em JS usamos o camellcase para referenciar o '-' do HTML

    dataset: irá pegar todo atributo data do HTML
    something: serve para referenciar um único data, que seria o data-something do input
  */
  console.log('O valor do data-something-else: ' + data)
  input.dataset.somethingElse = 'algum outro valor'
  //Podemos também alterar o valor da data
  console.log('O valor do data-something-else: ' + input.dataset.somethingElse)
})