class Account {
  #password
  #balance = 0
  //Aqui estamos privando essas propriedades
  //Não precisa para métodos
  constructor(user) {
    this.email = user.email
    this.#password = user.password //Usando o # para encapsular essa propriedade
    this.#balance = 0
  }

  getBalance(email, password) {
    if(this.#authenticate(email, password)) {
      console.log(this.#balance)
    } else {
      console.log('Errou safado')
    }
  }

  #authenticate(email, password) { //Podemos usar também em métodos
    return email === this.email && password === this.#password
  }
}
const user = {
  email: 'samuel@email.com',
  password: 12345
}

const myAccount = new Account(user)
myAccount.getBalance('samuel@email.com', 12345)