/*function dividir(num) {
    console.log(num)
    if(num % 2 === 0) {
        dividir(num / 2)
    } else {
        return num
    }
}
dividir(4096)

console.log('\n')
function dobrar(num) {
    console.log(num)
    if(num < 100) {
        dobrar(num * 2)
    } else {
        return num
    }
}
dobrar(1)*/

function fatorial(number) {
    if(number === 0 || number === 1) {
        return 1
    } else {
        console.log(number + ' * !' + (number - 1))
        return number * fatorial(number - 1)
    }
}

let dados = fatorial(2)
console.log(dados)
