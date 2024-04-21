let nomeCarro1 = prompt('Como o nome do primeiro carro:')
let vCarro1 = prompt('Qual a velocidade do primeiro carro:')

let nomeCarro2 = prompt('Como o nome do segundo carro:')
let vCarro2 = prompt('Qual a velocidade do segundo carro:')

if(vCarro1 > vCarro2) {
    alert(nomeCarro1 + ' é mais rápido que ' + nomeCarro2)

} else if(vCarro1 < vCarro2) {
    alert(nomeCarro2 + ' é mais rápido que ' + nomeCarro1)

} else {
    alert('Ambos possuem a mesma velocidade')
}