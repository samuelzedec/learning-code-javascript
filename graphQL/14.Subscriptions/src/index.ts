import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import typeDefs from "./schemas";
import resolvers from "./resolvers";

interface MyContext {
  token?: string;
}

// Função assíncrona para iniciar o servidor
async function startServer() {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer<MyContext>({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  // Inicia o Apollo Server
  await server.start();

  // Middleware para GraphQL
  app.use('/graphql',
    cors<cors.CorsRequest>(),
    express.json(),
    expressMiddleware(server, {
      context: async ({ req }) => ({ token: req.headers.token }),
    }),
  );

  // Escuta na porta 4000
  await new Promise<void>(resolve => httpServer.listen({ port: 4000 }, resolve));

  console.log(`🚀 Server ready at http://localhost:4000/graphql`);
}

// Chama a função para iniciar o servidor
startServer().catch((error) => {
  console.error('Error starting server:', error);
});
