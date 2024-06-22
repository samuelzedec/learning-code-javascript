const towns= ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

console.log(towns)
console.log(...towns)
console.log(...towns[0])

//Clonar objetos iteraveis
const townsCopy = towns
townsCopy.pop()
townsCopy.pop()
townsCopy.push('Juno')
console.log({towns, townsCopy})

//Passando assim, você cria um clone sem precisar mexer no array principal
const townsClone = [...towns]
townsClone.pop()
console.log({ towns, townsClone })

//Usando o spread em objetos normais
const townsObj = {...towns}
const townsObjClone = {...townsObj}
townsObjClone.test = 'test'
console.log({townsObj, townsObjClone})
