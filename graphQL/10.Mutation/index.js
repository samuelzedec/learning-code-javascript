const { ApolloServer } = require("apollo-server");
const { typeDefs, resolvers } = require("./src/graphql/index");

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({ url }) => {
    console.log(`🚀 \u001b[33mclique aqui: \u001b[34m${url}\u001b[0m`)
})