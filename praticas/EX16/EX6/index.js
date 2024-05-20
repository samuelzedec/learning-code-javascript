//Foreach array simples
let pessoas = Array('Joao', 'Maria', 'Jose')
pessoas.forEach(function(elemento, indice, arrayCompleto) {
    console.log(elemento + '\n' + indice + '\n' + arrayCompleto)
})

console.log('\n\n')
//forEach array de objetos 
let produtos = Array(
    {
        nomeProduto: 'Celular',
        valorProduto: 1200.00,
        porcentagemDesconto: 0.20
    },
    {
        nomeProduto: 'Notebook',
        valorProduto: 2500.00,
        porcentagemDesconto: 0.30
    },
    {
        nomeProduto: 'Televisão',
        valorProduto: 3500.00,
        porcentagemDesconto: 0.35
    }
)

produtos.forEach(function(elemento) {
    console.log(elemento.nomeProduto + 
    '\nValor do produto: ' + elemento.valorProduto)
})

console.log('\n\n')
//Exemplo real do uso do forEach 
let produto = Array(
    {
        nomeProduto: 'Celular',
        valorProduto: 1200.00,
        porcentagemDesconto: 0.20
    },
    {
        nomeProduto: 'Notebook',
        valorProduto: 2500.00,
        porcentagemDesconto: 0.30
    },
    {
        nomeProduto: 'Televisão',
        valorProduto: 3500.00,
        porcentagemDesconto: 0.35
    }
)
produto.forEach(function(elemento) {
    let valorDoDesconto = elemento.valorProduto * elemento.porcentagemDesconto
    elemento.valorProduto -= valorDoDesconto
    console.log(
        'Nome do produto: ' + elemento.nomeProduto + 
        '\nValor com desconto: ' + elemento.valorProduto + 
        '\nDesconto: ' + valorDoDesconto)
})

let array = [
    {
        nome: 'Real',
        moeda: 5,
        dinheiro: 120,
    },
    {
        nome: 'Euro',
        moeda: 7,
        dinheiro: 1400,
    },
    {
        nome: 'Dolar',
        moeda: 10,
        dinheiro: 50,
    }
]

array.forEach(function(elemento)  {
    let valor = elemento.moeda  * elemento.dinheiro
    console.log(elemento.nome + ': ' + valor)
})
//Teste de calculo
let calculo = [1, 4, 5, 7, 8, 3, 2, 10, 19]
totalSoma = 0
totalSub = 0
i = 0
function soma(a, b) {
    return a + b
}

function sub(a, b) {
    return a - b
}
calculo.forEach(function(elemento, indice) {
    if(elemento === 90) {
        totalSoma = true
        i = indice
    } else {
        totalSub = false
    }
})

if(totalSoma == true) {
    console.log(totalSoma + ' ' + i)
} else {
    console.log(totalSub)
}

function total(number) {
    let total = 0
    number.forEach(function(elemento) {
        total = soma(total, elemento)
    })
    return total
}

console.log(total([1, 5, 0 ,6, 8]))