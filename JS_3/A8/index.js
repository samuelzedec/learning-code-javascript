function addPlayer() {
  const position = document.getElementById('position').value
  const name = document.getElementById('name').value
  const numbers = document.getElementById('numbers').value

  const confirmation = confirm(
    `Confirme em escalar o jogador: \nNome: ${name} \nPosição: ${position} \nNúmero: ${numbers}`
  )

  if(confirmation) {
    const teamList = document.getElementById('teamList')
    const newLi = document.createElement('li')
    newLi.id = `Player_${numbers}`
    newLi.innerText = `${numbers}. ${name} (${position})`
    teamList.appendChild(newLi)

    document.getElementById('position').value = ''
    document.getElementById('name').value = ''
    document.getElementById('numbers').value = ''
  } else {
    alert('Cancelado')
  }
}

function removePlayer() {
  const numberToRemove = document.getElementById('numberToRemove').value
  const player = document.getElementById('Player_' + numberToRemove)
  const confirmation = confirm(player.innerText)

  if(confirmation) {
    const teamList = document.getElementById('teamList')
    teamList.removeChild(player)
    document.getElementById('numberToRemove').value = ''
  }
}