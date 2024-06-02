/*const people = [
  { name: 'Alice', age: 21 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 21 },
  { name: 'David', age: 25 },
  { name: 'Edward', age: 27 }
];

const result = people.reduce(function(ageTotal, elemento) {
  if(ageTotal[elemento.age]) {
    ageTotal[elemento.age].push(elemento)
  } else {
    ageTotal[elemento.age] = [elemento]
  }
  return ageTotal
}, {})

console.log(result)
//--------------

const arrayOfArrays = [[1, 2, 3], [4, 5], [6, 7, 8, 9]];
const inteiro = arrayOfArrays.reduce(function(total, elemento) {
  total.push(...elemento)
  return total
}, [])
console.log(inteiro)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = numbers.reduce(function(total, elemento) {
  if(elemento % 2 === 0) {
    total += elemento
  }
  return total
}, 0)
console.log(result)

const numbers = [1, 2, 2, 3, 4, 4, 5, 6, 6];
const igual = numbers.reduce(function(acumulador, elemento) {
  if(!acumulador.includes(elemento)) {
    acumulador.push(elemento)
  }
  return acumulador
}, [])
console.log(igual)

const keyValuePairs = [['name', 'Alice'], ['age', 25], ['city', 'Wonderland']];
const novo = keyValuePairs.reduce(function(acumulador, [key, value]) {
  acumulador[key] = value
  return acumulador
}, {})

console.log(novo)

const data = [
  { id: 'a1', value: 10 },
  { id: 'b2', value: 20 },
  { id: 'c3', value: 30 }
];

const result = data.reduce(function(acumulador, elemento) {
  acumulador[elemento.id] = elemento
  return acumulador
}, {})

console.log(result)

const text = 'Hello world, hello JavaScript, hello world!';
const result = text.split(' ').reduce(function(acumulador, elemento) {
  if(acumulador[elemento]) {
    acumulador[elemento]++
  } else {
    acumulador[elemento] = 1
  }
  return acumulador
}, {})

console.log(result)*/

const data = [
  { id: 1, value: 10 },
  { id: 2, value: 20 },
  { id: 3, value: 10 },
  { id: 4, value: 30 },
  { id: 5, value: 20 }
]

const total = data.reduce(function(acumulador, elemento) {
  if(!acumulador.valores.includes(elemento.value)) {
    acumulador.valores.push(elemento.value)
    acumulador.soma += elemento.value
  }
  return acumulador
}, {soma: 0, valores: []})
console.log(total)