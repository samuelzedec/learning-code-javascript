//contador de names por inciais

//Oque eu tenho?
const names = ['Daniel', 'Maria', 'Marta', 'Juca', 'Joao', 'Jessica']

//o que eu espero?
// namesCount = { d: 1, m: 2, j: 3}
namesCount = names.reduce(function(nomes, nomeAtual) {
    const primeiraLetra = nomeAtual[0].toLocaleLowerCase()
    if(nomes[primeiraLetra]) {
        nomes[primeiraLetra]++
    } else {
        nomes[primeiraLetra] = 1
    }
    return nomes
}, {})
// Nesse caso o acumulador ira valer um objeto...
console.log(namesCount)