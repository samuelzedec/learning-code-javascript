class User {
  constructor(fullname, email, password) {
    this.fullname = fullname
    this.email = email
    this.password = password
  }

  login(email, password) {
    if(this.email === email && this.password === password) {
      console.log('True')
    } else {
      console.log('False')
    }
  }
}

const zedec = new User('Samuel Zedec', 'samuelzedec@gmail.co', 93127732)
console.log(zedec)
zedec.login('samuelzedec@gmail.com', 93127732)