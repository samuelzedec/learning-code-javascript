const { ApolloServer } = require("apollo-server");
const { typeDefs, resolvers } = require("./src/graphql/index");

const server = new ApolloServer({
    typeDefs,
    resolvers,

    //Usamos para decidir o que iremos exibir quando ocorrer uma exceção
    formatError(err) {
        //aqui estamos pegando a mensagem de error e verificando com a 
        //função startsWith se ela começa com a seguinte messagem
        if (err.message.startsWith("Usuário já existente:")) {
            return new Error(err.message);
            //Com isso evitamos de mostrar a Stack inteira
        }

        if (err.message.startsWith("Não há usuário com esse id"))
            return new Error(err.message);
    }
})

server.listen().then(({ url }) => {
    console.log(`🚀 \u001b[33mclique aqui: \u001b[34m${url}\u001b[0m`)
})