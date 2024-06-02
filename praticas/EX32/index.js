function addProduct() {
  const nameProduct = document.getElementById('nameProduct').value
  const serialProduct = document.getElementById('serialProduct').value
  const validityProduct = document.getElementById('validityProduct').value 

  const confirmation = confirm(
    'Produto:' +
    '\nNome: ' + nameProduct +
    '\nNúmero: ' + serialProduct +
    '\nValidade: ' + validityProduct
  )

  if(confirmation) {
    const listProduct = document.getElementById('listProduct')
    const saveProduct = document.createElement('li')
    saveProduct.id = serialProduct
    saveProduct.innerText = `${serialProduct} - ${nameProduct} (${validityProduct})`
    listProduct.appendChild(saveProduct)

    document.getElementById('nameProduct').value = ''
    document.getElementById('serialProduct').value = ''
    document.getElementById('validityProduct').value = ''
  }
}

function removeProduct() {
  const removeSerial = document.getElementById('removeSerial').value
  const deleteProduct = document.getElementById(removeSerial)

  const confirmation = confirm(`Excluir o produto: \n ${deleteProduct.innerText}`)

  if(confirmation) {
    document.getElementById('listProduct').removeChild(deleteProduct)
    document.getElementById('listProduct').value = ''
  }
}