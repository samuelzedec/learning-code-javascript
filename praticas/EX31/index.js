const arrayLetter = []

function letter() {
  const letter = document.getElementById('letter').value
  const confirmation = confirm('Confirma a letra: ' + letter) 

  if(confirmation) {
    arrayLetter.push(letter)
  }
  console.log(arrayLetter)
}

function shippingOrder() {
  const shippingLetter = document.getElementById('shippingLetter')
  const shipping = arrayLetter.join(' - ')
  shippingLetter.innerText = shipping
}

function organizedOrder() {
  const order = arrayLetter.sort()
  const organizedLetter = document.getElementById('organizedLetter')
  organizedLetter.innerText = order.join(' - ')
}