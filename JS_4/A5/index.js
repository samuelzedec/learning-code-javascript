function normalSum(a, b) {
  return a + b
}
console.log(`Soma normal: ${normalSum(2, 2)}`)

const anonymousSum = function(a, b) {
  return a + b
}
console.log(`Soma anônima: ${anonymousSum(2, 2)}`)

const arrowSum = (a, b) => {
  return a + b
}
console.log(`Soma arrow: ${arrowSum(2, 2)}`)

const subtract = (a, b) => a - b
console.log(`subtração: ${subtract(2, 2)}`)

const double = num => `Dobro de ${num} é ${num*2}`
console.log(double(9))

const array = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']
const startingWithP = array.filter(town => town[0] === 'P')
console.log(startingWithP)

const nomes = [
  {nome: 'Samuel', idade: 19, sexo: 'Masculino'},
  {nome: 'Gabriel', idade: 17, sexo: 'Masculino'},
  {nome: 'Lucas', idade: 18, sexo: 'Masculino'},
  {nome: 'Lucy', idade: 18, sexo: 'Feminino'},
  {nome: 'Lulu', idade: 15, sexo: 'Feminino'}
]

const sexo = nomes.reduce((tipo, pessoa) => {
  if(!tipo[pessoa.sexo]) {
    tipo[pessoa.sexo] = [pessoa]
  } else {
    tipo[pessoa.sexo].push(pessoa)
  }
  return tipo
}, {}) 

console.log(sexo)