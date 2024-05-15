alert(
    'Bem-vindo! A seguir pediremos que informe alguns dados:' +
    '\n- Usuário' +
    '\n- Idade'
)

let userName = prompt('Qual seu nome de usuário?')
let idade = prompt('Qual sua idade?')
let acao = confirm(`Sua idade é ${idade}?`)

if(acao === true) {
    alert(
        'Usuário: ' + userName +
        '\nIdade: ' + idade +
        '\nIdade Confirmada: Sim'  
    )
} else {
    alert(
        'Usuário: ' + userName +
        '\nIdade: ' + idade +
        '\nIdade Confirmada: Não'  
    )
}

