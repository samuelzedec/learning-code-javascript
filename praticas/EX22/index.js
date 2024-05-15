let array = []
let n = 0
function validar() {
    while(array.length !== 6) {
        n = Number(prompt('Digite a nota:'))
        if(n >= 0 && n <= 10) {
            array.push(n)
        } else {
            alert('Nota Inválida')
        }
    }
}

function notas() {
    let menor = 9999999999
    let maior = -9999999999
    validar()
    for(let i = 0; i < array.length; i++) {
        if(menor > array[i]) {
            menor = array[i]
        }

        if(maior < array[i]) {
            maior = array[i]
        }
    }

    alert('Nota menor: ' + menor + '\nNota maior: ' + maior)
}
notas()