let medida = parseFloat(prompt('Digite um valor em metros:'))
let conversor = parseFloat(prompt(
    'Digite o número da medida que deseja usar:' + 
    '\n1. milímetro (mm)'+ 
    '\n2. centímetro (cm)' +
    '\n3. decímetro (dm)' +
    '\n4. decâmetro (dam)' +
    '\n5. hectômetro (hm)' +
    '\n6. quilômetro (km)'
))

switch(conversor) {
    case 1:
        medida *= 1000
        alert(medida + ' milímetro')
        break
    case 2:
        medida *= 100
        alert(medida + ' centímetro')
        break
    case 3:
        medida *= 10
        alert(medida + ' decímetro')
        break
    case 4: 
        medida /= 10
        alert(medida + ' decâmetro')
        break
    case 5: 
        medida /= 100 
        alert(medida + ' hectômetro')
        break
    case 6:
        medida /= 1000
        alert(medida + ' quilômetro') 
        break
    default:
        alert('Opção Inválida!')
}