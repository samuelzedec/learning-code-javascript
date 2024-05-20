let pessoa = {
    nome: 'Isaac',
    idade: 26,
    dizerOla() {
        console.log('Olá, Mundo! Meu nome é ' + this.nome)
    },
    dizerOi() {
        console.log(this.nome + ' é brabo!')
    }
}
console.log(pessoa)
pessoa.dizerOla()
pessoa.dizerOi()

let exibir = typeof console.log
console.log(exibir)