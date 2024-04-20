// Entrada
let nome = prompt("Qual seu primeiro nome: ")
let sobrenome = prompt("Qual seu sobrenome: ")
let campoDeEstudo = prompt("Qual seu campo de estudo: ")
let anoDeNascimento = prompt("Qual ano de nascimento: ")

//Processamento
let idade = 2024 - anoDeNascimento

//Saída
confirm(
    "Seu nome completo: " + nome + " " + sobrenome +
    "\nSeu campo de estudo: " + campoDeEstudo +
    "\nSua idade: " + idade
)