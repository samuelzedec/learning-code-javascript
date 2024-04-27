let n1 
tabuada = ''

n1 = parseFloat(prompt('Digite um número:'))

for(let i = 0; i <= 20; i++) {
    tabuada += "\n" + n1 + ' x ' + i  + ' = ' + n1 * i   
}

alert('tabuada de multiplicação:' + tabuada)