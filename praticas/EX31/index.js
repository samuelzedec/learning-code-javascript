function start() {
  const teamName = document.getElementById('teamName')
  const team = prompt('Insira o nome do seu time:')
  const name = document.createElement('h1')
  name.innerText = 'Nome do time: ' + team
  teamName.appendChild(name)
}