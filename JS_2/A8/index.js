//propriedade
let nome = 'prop'
console.log(nome)

//Objeto
let objeto = {}
console.log(typeof objeto)
console.log(objeto)

objeto.prop = 'Olá, Mundo!'
console.log(objeto.prop)
console.log(objeto[nome])

//Igualdade
const verif1 = objeto.prop === objeto[nome]
console.log(verif1)

const verif2 = objeto.prop === objeto["prop"]
console.log(verif2)

const verif3 = objeto.prop === objeto["pro" + "p"]
console.log(verif3)

//Função com objeto
let funcao = 'log'
console[funcao]('Olá, mundo!')

//Exemplo do uso de objeto
const pessoa = {}
pessoa.idade = 19
pessoa.nome = 'Samuel'
pessoa.colegas = ['Lucas', 'José Gabriel']
pessoa.endereco = {
    rua: 'Rua Aramari',
    casa: 23,
}
console[funcao](pessoa)