const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

//map
/*const nomes = []
    for(let i = 0; i < personagens.length; i++) {
    nomes.push(personagens[i].nome)
}
console.log(nomes)*/
const nomes = personagens.map(function(personagem){
    return personagem.nome + 'Olá'
})
console.log(nomes)

//filter
/*const racas = []
for(let i = 0; i < personagens.length; i++) {
    if(personagens[i].raca === 'Orc') {
        racas.push(personagens[i])
    }
}
console.log(racas)*/
const racas = personagens.filter(function(valor){
    return valor.raca === 'Orc'
}) 
console.log(racas)

//Reduce
let nivelAcumulado = personagens.reduce(function(valorAcumulado, personagem) {
    return valorAcumulado += personagem.nivel
}, 0)
console.log(nivelAcumulado)

let todasAsRacas = personagens.reduce(function(acumulado, personagem) {
    if(acumulado[personagem.raca]) {
        acumulado[personagem.raca].push(personagem)
    } else {
        acumulado[personagem.raca] = [personagem]
    }
    return acumulado
}, {})
console.log(todasAsRacas)

//Sort
personagens.sort(function(a, b) {
    return b.nivel - a.nivel
})
console.log(personagens)