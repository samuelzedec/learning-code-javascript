/*const array = [2,3,4,6]
function reducePratica() {
  const result = array.reduce(function(acumulador, numero) {
    acumulador *= numero
    return acumulador
  }, 1)
  return result
}
console.log(reducePratica())*/

/*const letras = ['a', 'b', 'c', 'd', 'g']
function reducePratica() {
  const result = letras.reduce(function(acumulador, letra) {
    acumulador += letra
    return acumulador
  }, '') 
  return result
}
console.log(reducePratica())*/

/*const maior = [-10,-4,-5,-6,-20]

function maiorAtual() {
  const maiorNumber = maior.reduce(function(acumulador, number) {
    if(number > acumulador) {
      acumulador = number
    }
    return acumulador
  }, -999999999999999)

  console.log(maiorNumber)
}
maiorAtual()*/

/*const dobrar = [2, 4, 6, 7, 8, 9]
function dobroNumber() {
  const dobroTotal = dobrar.map(function(elemento) {
    return elemento * 2
  })
  console.log(dobroTotal)
}
dobroNumber()*/

/*const letra = ['a', 'b', 'c', 'd', 'e']
function letraM() {
  const letras = letra.map(function(elemento) {
    return elemento.toUpperCase()
  })
  console.log(letras)
}
letraM()

const palavras = ['samuel', 'gabriel', 'lucas', 'sonia', 'maria jose']
function cumprimento() {
  const tamanho = palavras.map(function(elemento) {
    return elemento.length
  })
  console.log(tamanho)
}
cumprimento()

const array = [2, 3, 4, 6]
function converter() {
  const converterNumber = array.map(function(elemento) {
    return elemento.toString()
  })
  console.log(converterNumber)
}
converter()*/

/*const par = [2, 6, 5, 7, 3, 10]
function pares() {
  const parNumber = par.filter(function(elemento) {
    if(elemento % 2 === 0) {
      return elemento
    }
  })
  console.log(parNumber)
}
pares()*/

/*const positivo = [2, 6, -5, 7, -3, 10]
function pos() {
  const posNumber = positivo.filter(function(elemento) {
    if(elemento > 0) {
      return elemento
    }
  })
  console.log(posNumber)
}
pos()*/

/*const palavras = ['samuel', 'gabriel', 'lucas', 'sonia', 'maria jose']

function maiorL() {
  const mais = palavras.filter(function(elemento) {
    if(elemento.length > 5) {
      return elemento
    }
  })
  console.log(mais)
}
maiorL()*/

/*const dez = [7, 9, 67, 40, 50, 31]
const impar = dez.filter(function(elemento) {
  if(elemento % 2 === 1 && elemento > 10) {
    return elemento
  }
})
console.log(impar)

const crescente = dez.slice().sort(function(a, b) {
  return a - b
})
console.log(crescente)*/

const palavras = ['samuel', 'gabriel', 'lucas', 'sonia', 'maria jose']

const ordem = palavras.slice().sort()
console.log(ordem)

const lets = [
  {nome: 'Samuel', idade: 19},
  {nome: 'Gabriel', idade: 17},
  {nome: 'Lucas', idade: 18},
  {nome: 'Ana Clara', idade: 16}
]

lets.sort(function(a, b) {
  return a.idade - b.idade
})
console.log(lets)