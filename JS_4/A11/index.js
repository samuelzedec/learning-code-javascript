const a = 0 //número 0 e convertido para false
const b = null //Null tbm é convertido para false
const c = 'test' //true

console.log(a || b || c)
//Nesse caso o primeiro valor true q ele encontrar, ele irá retorná o mesmo, nesse caso ele irá retorná C

console.log(a ?? b ?? c)
//Nesse caso ele irá retornar o primeiro valor q não for Null ou undefined, então ele irá retornar o A, porque zero não é null e nem undefined

let d = 0

let e = d || 42

console.log(e, d)

e = d ?? 42
console.log({d, e})


const J = {
  1: 'Samuel'
}