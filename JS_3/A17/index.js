function useLightTheme() {
  document.body.style.color = '#212529'
  document.body.style.backgroundColor = '#f1f5f9'
}

function useDarkTheme() {
  document.body.style.color = '#f1f5f9'
  document.body.style.backgroundColor = '#252624'
}

function switchTheme() {
  document.body.classList.toggle('is-light')
  //Caso o body não tenha essa class, ele irá adicionar, caso ja tenha, ele iré remover
  document.body.classList.toggle('is-dark')
  //Então nesse caso, quando ele tiver uma, será removido e adicionado a outra 
}

document.getElementById('darkBtn').addEventListener('click', useDarkTheme)
document.getElementById('lightBtn').addEventListener('click', useLightTheme)
document.getElementById('switchBtn').addEventListener('click', switchTheme)