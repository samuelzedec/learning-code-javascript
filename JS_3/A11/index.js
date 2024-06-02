function register(ev) {
  const elementSection = ev.currentTarget.parentNode
  /*
    - ev: parâmetro que ira guardar o evento que foi disparado, que no caso seria a string 'click'

    - currentTarget: irá pegar o elemento que disparou o evento, que no caso seria o <button>

    - parentNode: irá pegar o pai do elemento que disparou o evento, que no caso seria a section
  */
  const username = elementSection.children.username.value
  const password = elementSection.children.password.value
  const passwordConfirmation = elementSection.children.passwordConfirmation.value
  /*
    - children: irá pegar o filho do elemento, juntando com passwordConfirmation que será o ID do elemento que o children irá pegar

    - value: será o valor do elemento que tiver o ID passwordConfirmation
  */

  if(password === passwordConfirmation) {
    alert('Acesso feito ' + username)
  } else {
    alert('Acesso negado')
  }
  console.log(ev)
}

const button = document.getElementById('registerButton')
button.addEventListener('click', register)
button.addEventListener('mousemove', function(eventos) {
  console.log(eventos.currentTarget)
  /*
    - eventos: parâmetro que irá guardar o evento que será disparado, que no caso é o 'mousemove'
    
    - currentTarget: pega o elemento que dispara o evento, que no caso é o <button>
  */
})
/*
  1º Parâmetro: tem quer ser o evento que será adicionado ao elemento
    |-> click: evento a ser adicionado no elemento <button>, lembrando que em JavaScript não é preciso colocar o "on" que nem no HTML (Ex: onclick="")

  2º Parâmetro: tem quer ser uma função de callback
    |-> register: para chamar a função register, lembrando que deve ser passada sem parênteses para chamar a função em si e não seu resultado. Também poderia ser usado um função anônima 
*/

function removeButton() {
  button.removeEventListener('click', register)
  /*
    - click: Evento a ser removido do elemento <button>

    - register: função a ser removida do elemento <button>
  */
}




