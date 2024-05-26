function show() {
  //Seleciona um elemento da página HTML a partir do seu ID
  const contactList = document.getElementById('contact-list')
  console.log(contactList)

  //Seleciona todos os elementos com a TAG inserida do HTML e retornará uma HTMLCollection
  const listElements = document.getElementsByTagName('li')
  console.log(listElements)

  //Seleciona todos os elementos que possuem a CLASS inserida no parâmetro e retornando uma HTMLCollection
  const contactInputs = document.getElementsByClassName('contact-input')
  console.log(contactInputs)

  //Os parâmetros recebem a sintaxe do CSS para pegar os elementos, porém em vez de um único elemento, ele pegará vários. No exemplo abaixo ele ira pegar todos os <label> q existe no final de uma <li>. E retornará uma NodeList
  const contacts = document.querySelectorAll('#contact-list > li > label')
  console.log(contacts)

  //Irá selecionar os elementos que possuem o atributo name, porém só pegara um único retornará um único name
  const contact1 = document.getElementsByName('contact1')
  console.log(contact1)

  //Os parâmetros recebem a sintaxe do CSS para pegar o elemento. No exemplo abaixo ele ira pegar o primeiro com a tag <label> q existe no final de uma <li>. E retornará um único label.
  const firstContact = document.querySelector('#contact-list > li > label')
  console.log(firstContact)
}