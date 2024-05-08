let array = [10, 170, 56, 83, 90, 78]
let maior = 0

for(let i = 0; i < array.length; i++) {
    if(array[i] > maior) {
        maior = array[i]
    }
}

alert(maior)