const { ApolloServer } = require("apollo-server");
const { typeDefs, resolvers } = require("./src/graphql/index");

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({ url }) => {
    console.log("🚀", url);
})