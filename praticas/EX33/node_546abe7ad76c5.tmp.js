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

const dobrar = [2, 4, 6, 7, 8, 9]
function dobroNumber() {
  const dobroTotal = dobrar.map(function(elemento) {
    return elemento * 2
  })
  console.log(dobroTotal)
}

dobroNumber()