function show() {
  const contactList = document.getElementById('contact-list')
  console.log(contactList) 
  //Obtem o elemento pelo seu ID no HTML e retorna o elemento

  const listElements = document.getElementsByTagName('li')
  console.log(listElements)
  //Obtem os elementos pela sua tag no HTML e retorna uma HTMLCollection

  const contactInputs = document.getElementsByClassName('contact-input')
  console.log(contactInputs)
  //Obtem os elementos pela sua CLASS no HTML e retora uma HTMLCollection

  const contacts = document.querySelectorAll('#contact-list > li > label')
  console.log(contacts)
  //Obtem os elementos pelas CLASS, porém seu parâmetro recebe os valores igual a escrita no CSS e retorna uma NodeList que pode ser usada com métodos como o .forEach()

  const contact1 = document.getElementsByName('contact1')
  console.log(contact1)
  //Obtem o elemento a partir do seu Name no HTML e retornará uma NodeList

  const firstContact = document.querySelector('#contact-list > li > label')
  console.log(firstContact)
  //Obtem o elemento pelo ID ou CLASS, porém seu parâmetro recebe os valores igual a escrita no CSS, e irá retorna o primeiro elemento q ele encontra que tenha as caracteristicas do parêmetro
}