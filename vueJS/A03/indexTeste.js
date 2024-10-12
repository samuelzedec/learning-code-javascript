//o Vue é um objeto que fica dispónivel após a importar a biblioteca no html
const app = Vue.createApp({ // Cria uma aplicação Vue
    /*
    * template: '<h1>Hello, {{ name }}!</h1><button v-on:click="increment()">Contador: {{ count }}</button>',
    * podemos pegar seu conteúdo e jogar diretamente no html, dentro do elemento que ele está sendo armazenado
    */

    // {{ }} permite referenciar dados do JavaScript no HTML
    // Aqui, estamos a referenciar a propriedade 'name' do objeto retornado por 'data'
    
    data() {
        return {
            count: 0,
            name: "Samuel"
            // Define a propriedade 'name' com o valor 'OneBitCode'
            // Apenas as propriedades definidas aqui podem ser acessadas diretamente no template
        }
    },

    methods: {
        increment() {
            this.count++
        }
    }
})
app.mount('#app'); // Monta a aplicação no elemento com ‘id’ 'app'
