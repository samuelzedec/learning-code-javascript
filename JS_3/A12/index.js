const form = document.getElementById('orderForm')
form.addEventListener('submit', function(event) {
  event.preventDefault()
  //preventDefault(): irá inpedir o comportamento padrão do evento
  //No caso do submit, seria mudar a URL e ir para outra página
  const name = document.querySelector('input[name = "name"]').value
  const address = document.querySelector('input[name = "address"]').value
  const breadType = document.querySelector('select[name = "breadType"]').value
  const main = document.querySelector('input[name = "main"]').value
  const observations = document.querySelector('textarea[name = "observations"]')

  let salad = ""
  document.querySelectorAll('input[name = "salad"]:checked').forEach(function(item) {
    salad += ' - ' + item.value + '\n'
  })

  console.log({ name, address, breadType, main, observations,  salad } )
})