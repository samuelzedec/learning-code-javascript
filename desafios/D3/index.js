function troca(elementos){
  const elementosTrocados = []
  for(let i = elementos.length - 1; i >= 0; i--) {
    elementosTrocados.push(elementos[i])
  }
  return elementosTrocados
}
console.log([0, 9, 6, 8, 9, 1, 5, 7])
console.log(troca([0, 9, 6, 8, 9, 1, 5, 7]))
console.log(['Oh', 'Hi', 'Mark'])
console.log(troca(['Oh', 'Hi', 'Mark']))