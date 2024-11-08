const { gql, ApolloServer } = require('apollo-server');

/**
 * => Schema
 * -> Schema Definition Language ou Linguagem de Definição de Esquema
 * -> SDL
*/

const produtos = [
    { id: 2131231, nome: "Fone De Ovido", valor: 19.99 },
    { id: 404040, nome: "MacBook Pro M3 Max", valor: 18999.99}
]

const usuarios = [
    { idade: 19, salario: 799.99, nome: "Samuel", ativo: false, id: 4002 },
    { idade: 22, salario: 2799.99, nome: "Rayn", ativo: true, id: 4003 }
]

const typeDefs = gql`
    # Aqui estamos criando tipo uma interface com propriedades e etc
    type Usuario {
        idade: Int 
        salario: Float
        nome: String
        ativo: Boolean
        id: ID
    }

    type Produto {
        id: ID!
        nome: String!,
        valor: Float!
    }

    # E aqui estamos dizendo que a propriedade usuario é do tipo da interface Usuario
    type Query {
        usuarios: [Usuario!]!
        produtos: [Produto!]!
    }
`;

const resolvers = {
    Query: {
        usuarios() {
            return usuarios;
        },

        produtos() {
            return produtos;
        }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen();