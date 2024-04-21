let idade = parseFloat(prompt('qual sua idade:'))

if(idade >= 25) {
    alert('Você é adulto')
} else if(idade >= 18) {
    alert('Você é jovem')
} else if(idade >= 12) {
    alert('Você é adolescente')
} else if(idade >= 5) {
    alert('Você é criança')
} else if(idade >= 0) {
    alert('Você é bebê')
}