const { ApolloServer } = require("apollo-server");
const { typeDefs, resolvers } = require("./src/graphql/index");

const server = new ApolloServer({
    typeDefs,
    resolvers
});

// nesse código caso de certo, o then() irá pegar a url que é uma propriedade 
// padrão e desestruturar ela e exibir no console no meu navegador
server.listen().then(({ url }) => {
    console.log(`🚀 \u001b[34mServer ready at:\u001b[0m ${url}`);
});
