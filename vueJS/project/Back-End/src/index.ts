import { ApolloServer } from "apollo-server";
import typeDefs from "./graphql/modules/typeDefs";
import resolvers from "./graphql/modules/resolvers";

const server = new ApolloServer({
    typeDefs,
    resolvers,
    formatError(err: Error) {
        return new Error(err.message);
    }
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
})