const path = require("path")

module.exports = {
  devServer: { //Para configucar o webpack dev server
    static: { //Configuração do caminho (Padrão: public)
      directory: path.resolve(__dirname, "public") 
      //directory: configurando o caminho para o localhost
    },
    compress: true, //Comprimide o arquivo para a extensão '.zip'
    port: 8000 //Para trocar a porta do localhost
  },

  entry: {
    index: "./src/index.js"
  },
  mode: "production",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].min.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}