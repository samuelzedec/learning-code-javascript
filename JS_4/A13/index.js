//Média Aritmética Simples
const mediaSimples = (...numbers) => {
  const total = numbers.reduce((acc, num) => acc + num, 0)
  return total / numbers.length
}
console.log(mediaSimples(2, 6, 3, 7, 4))

//Média Aritmética Ponderada
const mediaPonderada = (...numbers) => {
  const media = numbers.reduce((acc, {n, p}) => acc += (n * (p ?? 1)) ,0)
  const pond = numbers.reduce((acc, {p}) => acc += (p ?? 1), 0)
  return media / pond
}
console.log(mediaPonderada(
  { n: 7, p: 2}, 
  { n: 9, p: 5}, 
  { n: 3, p: 1 })
)

//Mediana
const mediana = (...numbers) => {
  const ordenar = [...numbers].sort((a, b) => a - b)
  const meio = Math.floor(ordenar.length / 2)
  if(ordenar.length % 2 !== 0) {
    return ordenar[meio]
  } else {
    //order = [3, 7, 8, 9, 14, 15]
    return [ordenar[meio], ordenar[meio - 1]]
  }
}
console.log(mediana(15, 14, 9, 8, 7, 3))

//Moda
const moda = (...numbers) => {
  const quantidades = numbers.map(num => [
    num,
    numbers.filter(n => num === n).length
  ])
  quantidades.sort((a, b) => b[1] - a[1])
  return quantidades[0][0]
}

console.log(moda(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4))