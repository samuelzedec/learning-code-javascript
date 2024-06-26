const test = require('./index.js')

test.validarIdade(test.niver)
test.validarNome('Gabriel')

const niver = {
  idade: 17,
  func: function() {
    console.log(this.idade)
  }
}
niver.func()