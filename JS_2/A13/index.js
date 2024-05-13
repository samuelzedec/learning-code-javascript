function dobro(x) {
    console.log('O dobro de ' + x + ' é ' + (x * 2))
}
dobro(9)
dobro()

function dizerOla(nome = 'Mundo') {
    console.log('Olá, ' + nome + '!')
}
dizerOla('Samuel')
dizerOla()

function soma(a = 0, b = 0) {
    console.log(`O resultado da soma entre ${a} e ${b} é: ${(a + b)}`)
}
soma(9, 3)
soma(0)

function criarUser(nome, email, senha, tipo = 'admin') {
    const user = {
        nome, //nome: nome
        email, //email: email
        senha, //senha: senha
        tipo 
    }
    console.log(user)
}
criarUser('Samuel', 'samuel@email', 1234)
criarUser('samuel@mail', 'Samuel', 1234)

function user2(nome, tipo = 'admin', email, senha) {
    const userT = {
        nome, //nome: nome
        email, //email: email
        senha, //senha: senha
        tipo 
    }
    console.log(userT)
}

user2('Samuel', 'samuel@email', 1234)

function usuario(user) {
    console.log(user)
}

const lego = {
    nome: 'Samuel',
    email: 'samuelzedec@gmail.com',
    idade: 19
}
usuario(lego)


