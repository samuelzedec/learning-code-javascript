function addPlayer() {
  const position =  document.getElementById('position').value
  const name =  document.getElementById('name').value
  const numbers =  document.getElementById('numbers').value

  const confirmation = confirm(
    'Escalar o jogador:' +
    '\nNome: ' + name +
    '\nNúmero: ' + numbers +
    '\nPosição: ' + position
  )

  if(confirmation) {
    const teamList = document.getElementById('teamList')
    const playerItem = document.createElement('li')
    playerItem.id = 'player ' + numbers
    playerItem.innerText = position + ': ' + name + ' (' + numbers + ')'
    teamList.appendChild(playerItem)

    document.getElementById('position').value = ''
    document.getElementById('name').value = ''
    document.getElementById('numbers').value = ''
  }
}

function removePlayer() {
  const numberToRemove = document.getElementById('numberToRemove').value
  const player = document.getElementById('player ' + numberToRemove)

  const confirmation = confirm(
    'Deseja escluir o jogaor: ' + player.innerText
  )

  if(confirmation) {
    document.getElementById('teamList').removeChild(player)
    document.getElementById('numberToRemove').value = ''
  }
}