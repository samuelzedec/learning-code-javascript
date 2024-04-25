let escolha = 0
do {
    escolha = parseFloat(prompt(
        'Digite o número da opção desejada:\n' +
        '1 - Login\n' +
        '2 - Cadastro\n' +
        '3 - Sobre\n' +
        '4 - Contato\n' +
        '5 - Encerrar'
        ))

        switch(escolha) {
            case 1: 
                alert('Você acessou a parte de Login')
                break
            case 2: 
                alert('Você acessou a parte de Cadastro')
                break
            case 3: 
                alert('Você acessou a parte de Sobre')
                break
            case 4: 
                alert('Você acessou a parte de Contato')
                break
            case 5: 
                alert('Programa Encerrado...')
                break
            default:
               alert('Opção Invalída') 
        }
} while(escolha !== 5)