const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    index: './src/index.js'
  },
  mode: 'development',
  module: { //Usado para acessar o modulo, para o loader poder transformar 
    rules: [{ //Rules = regras
      test: /\.css$/, //Usado para pesquisa os arquivos que tem ".css", pode ser usado para fazer a filtração de outras extensões
      //Ex: /\.sass$/, /\.js$/ e etc...

      //test: em quais arquivos ele irá aplicar o loader
      //Tem q usar expressões regulares para passar seu valor, que são forma de analisar strings
      use: [MiniCssExtractPlugin.loader, 'css-loader']
      //use: para saber qual loader irá usar
      //MiniCssExtractPlugin.loader: fara com que separe o .css do .js
    }]
  }, 
  plugins: [
    new MiniCssExtractPlugin()
    //new: instancia, usado para criar
    //MiniCssExtractPlugin(): função construtora, que irá devolver um objeto
  ]
}