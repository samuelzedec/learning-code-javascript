let userName = prompt('Digite seu usuário?')
let userSenha = prompt('Qual sua senha?')

if(userName !== userSenha) {
    alert('Acesso feito...')
} else {
    while(userName === userSenha) {
        alert('Nome e senha iguais, Repita o login!')
        userName = prompt('Digite seu usuário?')
        userSenha = prompt('Qual sua senha?')
    }
    alert('Acesso feito...')
}