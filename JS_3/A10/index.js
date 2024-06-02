function register(element) {
  const userName = element.children.username.value
  //element: parâmetro que vai receber o this.parentNode do HTML, sendo assim element irá valer o elemento section

  //Children: quer dizer que vai pegar o valor do filho do elemento <section> que tiver o ID username que no caso seria o <input>
  
  //value: irá receber o valor que será inserido no input que tem o ID username

  const password = element.children.password.value
  const passwordConfirmation = element.children.passwordConfirmation.value
  console.log({userName, password, passwordConfirmation})

  if(password === passwordConfirmation) {
    alert(`usuario: ${userName} cadatrado`)
  } else {
    alert('As senhas não conferem')
  }
}