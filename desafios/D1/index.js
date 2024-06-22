function arithmeticAverage(array) {
  let avarage = array.reduce(function(acumulador, elemento) {
    return acumulador + elemento
  }, 0)
  return avarage / array.length
}
console.log(arithmeticAverage([10, 9, 6, 8, 9,1, 5, 7]))
