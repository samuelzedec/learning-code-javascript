//const Address = require('./Address')
const Person = require('./Person')

//const addr = new Address('Rua Parintins', 264, 'Colônia Terra Nova II', 'Manaus', 'Amazonas')
const samuel = new Person('Samuel Zedec', 'Rua Parintins', 264, 'Colônia Terra Nova II', 'Manaus', 'Amazonas')

console.log(samuel)
console.log(samuel.address.fullAddress())
console.log(samuel.name)