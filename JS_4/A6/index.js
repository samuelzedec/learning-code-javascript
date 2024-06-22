//Objetos
const person = {
  name: 'Luke',
  job: 'Farmer',
  parents: ['Anakin', 'Padme']
}

const name = person.name
const {job, parents} = person
//Nesse caso estamos criando duas variaveis do das propriedades person, assim com uma unica linha criamos duas variaveis

console.log(name, job, parents)

//Arrays
const [father, mother] = parents
//Nesse caso estamos pegando a constante parents q criamos a partir do objeto. No array a sequencia tem importância, então o primeiro elemento do array, será o primeiro nome inserido
/*
  Ex: 
    father = Anakin
    primeiro nome = primeiro elemento
*/
console.log(father)
console.log(mother)

//Podemos fazer a desestrutução nos parâmetros da função
function createUser({name, job, parents}) {
  const id = Math.floor(Math.random() * 9999)
  return {
    id,
    name,
    job,
    parents
  }
}
const luke = createUser(person)
console.log(luke)

const objeto = {
  nome: 'Samuel',
  idade: 19,
  sexo: 'Masculino',
  cor: 'Moreno',
  carros: ['Lamborghini Uracan', 'Audi R8', 'McLaren']
}

const {nome, idade, sexo, cor, carros} = objeto
console.log(nome, idade, sexo, cor)
console.log(carros)

const [favorito, legal, novo] = carros
console.log(favorito)
console.log(legal)

function exibir({nome, idade, sexo, cor, carros}) {
  const id = Math.floor(Math.random() * 999)
  return {
    id,
    nome,
    idade,
    sexo, 
    cor,
    carros
  }
}

const pessoa = exibir(objeto)
console.log(pessoa)