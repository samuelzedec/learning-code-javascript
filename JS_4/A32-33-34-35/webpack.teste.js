const path = require('path')

module.exports = {
  entry: { //Entrada
    louco: './src/index.js',
    //index: irá ser nome do arquivo que receberá os arquivos comprimidos, caso não configura o filename
    //./src/index.js: entrada para ser comprimido
    hello: './src/hello.js'
  },
  mode: 'development', //Como o arquivo deve ser comprimido
  output: {
    path: path.resolve(__dirname, 'public'),
    //path.resolve: irá pegar o caminho absoluto
    //_dirname: usado para pegar o caminho completo
    //public: nome da pasta final
    filename: 'bundle.[name].min.js',
    //Aqui usamos para por o nome que queremos na arquivo comprimido

    //Caso tenha mais de um arquivo de entrada, somos obrigado a usar o "[name]" para diferenciar, usando o name ele irá pegar o nome da propriedade do entry
  }
}