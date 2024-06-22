const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultInput = document.getElementById('result')

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll('.charKey').forEach(function(charKeyButton) {
  charKeyButton.addEventListener('click', function() {
    const value = charKeyButton.dataset.value
    input.value += value
  })
  /*
    Nessa função estamos pegando todos os buttons que tem a classe 'charKey' e iterando sobre cada uma dela.

    Depois estamos adicionando um evento de 'click' a cada uma dessas teclas.

    Por último estamos recebendo o valor do data no HTML e concatenando aos valores do input já inseridos
  */
})

document.getElementById('clear').addEventListener('click', function(ev) {
  input.value = ''
  input.focus() //Ao usar o focus, assim que for limpo, o mouse será direcionado ao input
})

input.addEventListener('keydown', function(ev) {
  ev.preventDefault()
  /*
    Irá evitar o comportamento padrão do keydown
    Então estamos evitando que o valor seja inserido no input automaticamente, porque precimos controlar manualmente
  */

  if(allowedKeys.includes(ev.key)) {
    input.value += ev.key
    return 
  /*
    Nessa parte do código estamos verificando se a tecla inserida pelo usuario existe no nosso array de teclas:
      • ev.key
        - ev: Evento que foi disparado ao ser inserido pelo usuário
        - key: A tecla associada ao evento que foi disparado
      • return
        - É usado para encerrar a função
  */
  }

  if(ev.key === 'Backspace') {
    input.value = input.value.slice(0, -1)
    /*
      Aqui estamos pegando o valor atual e cortando do primeiro elemento até o penúltimo elemento, assim retornando sem o último elemento.
    */
  }

  if(ev.key === 'Enter') {
    calculate()
  }
})
document.getElementById('equal').addEventListener('click', calculate)

function calculate() {
  resultInput.value = 'Error'
  resultInput.classList.add('error')
  //Esse será o valor inivial do resultInput.value
  const result = eval(input.value)
  //Caso não de erro na função eval(), ela irá continuar o código
  resultInput.classList.remove('error')
  resultInput.value = result
}

document.getElementById('themeSwitcher').addEventListener('click', function() {
  if(main.dataset.theme === 'dark') {
    root.style.setProperty('--bg-color', '#f1f5f9')
    root.style.setProperty('--border-color', '#aaa')
    root.style.setProperty('--font-color', '#212529')
    root.style.setProperty('--primary-color', '#26834a')
    main.dataset.theme = 'light'
  } else {
    root.style.setProperty('--bg-color', '#212529')
    root.style.setProperty('--border-color', '#666')
    root.style.setProperty('--font-color', '#f1f5f9')
    root.style.setProperty('--primary-color', '#4dff91')
    main.dataset.theme = 'dark'
  }
  /*
    • setProperty(): Serve para configurar o CSS de um elemento
    • Parâmetros
      1º) propriedade CSS que deseja acessar
      2º) valor que deseja atribuir a propriedade CSS
  */
})

document.getElementById('copyToClipboard').addEventListener('click', function(ev) {
  const button = ev.currentTarget
  if(button.innerText === 'Copy') {
    button.innerText = 'Copied!'
    button.classList.add('success')
    /*
      classList.add(): estamos permitindo manipular as classes do elemento com o 'classList' e adicionando uma nova class nele como '.add()'
    */
   navigator.clipboard.writeText(result.value)
  } else {
    button.innerText = 'Copy'
    button.classList.remove('success')
  }
})