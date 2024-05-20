//O que eu tenho?
const pessoas = [
    {nome: 'Daniel', idade: 28},
    {nome: 'Maria', idade: 29},
    {nome: 'Marta', idade: 29}
]
// Oque eu espero?
//{'28': ['Daniel']. '29': ['Maria', 'Marta']}

const porIdade = pessoas.reduce(function(idades, nomes) {
    if(idades[nomes.idade]) {
        idades[nomes.idade].push(nomes.nome)
    } else {
        idades[nomes.idade] = [nomes.nome]
    }
    return idades
}, {})

console.log(porIdade)