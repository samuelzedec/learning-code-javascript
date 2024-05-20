// Carrinho de compras
// Retornar o total a pagar

//O que eu tenho?
const itens = [
    {description: 'pen', quantity: 1, price: 3},
    {description: 'rule', quantity: 2, price: 5},
    {description: 'erase', quantity: 2, price: 6},
]

const totalPagmento = itens.reduce(function(pagamentoTotal, valores) {
    return pagamentoTotal += valores.price * valores.quantity
}, 0)
//esse zero e o valor do pagamentoTotal, lembrando que poderia ser qualquer coisa, como um objeto, array, string e etc...
console.log(totalPagmento)