const user = {
  name: 'John Doe',
  email: 'doejohn@email.com',

  friends: [{
    name: 'Mary',
    address: {
      street: 'Some Street',
      number: 89
    }
  }],
  age: 42,
  phone: {
    countryCode: '+55',
    ddd: '22',
    number: 998765432
  }
}

//console.log(user.friends[0].phone.ddd)
console.log(user?.friends[0]?.phone?.ddd)
/*
  Nesse casso estamos verificando se existe cada encademento, no momento que ela for null ou undefined, ele ira parar de encadear

  Ex:
  user === true
  friends[0] === true
  phone === undefined

  o phone é undefined, enão ele ira parar de encadear e retornar o valor do phone que é undefined
*/

console.log(user.brothers?.[5].name)
/*
  Aqui estamos acessando o array brothers que é undefined, então não tem como acessar a posição 5 de undefined, por isso usamos o ?. entre o brothers e o [5], para verficar se não undefined, como brothres é undefined, ele não irá continuar encadeandom
*/