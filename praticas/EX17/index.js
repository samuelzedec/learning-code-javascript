let n = Number(prompt('Digite um número:'))
let raiz = 0

for(let i = 1; i <= n; i++) {
    raiz = i * i
    if(raiz === n) {
        alert(`raiz de ${n} é ${i}`)
    }
}