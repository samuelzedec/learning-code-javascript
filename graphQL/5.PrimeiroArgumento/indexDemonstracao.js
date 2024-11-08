const { gql, ApolloServer } = require('apollo-server');

const db = [
    {
        id: 1,
        nome: "Paulo",
        email: "paulo@email.com",
        telefone: "11 1234 1234"
    },
    {
        id: 2,
        nome: "Lucas",
        email: "lucas@email.com",
        telefone_fixo: "34 1234 1234"
        /**
         * Caso uma propriedade não esteja de acordo com a sua interface, o graphQl não irá atribuia a uma propriedade do typeDefs
        */
    }
]

const typeDefs = gql`
    type Usuario {
        id: ID
        nome: String
        email: String
        telefone: String
    }

    type Query {
        usuario: Usuario
    }
`;

const resolvers = {
    Usuario: {
        telefone(obj) {
            //O "obj" está referenciando o objeto do db na posição um
            //Caso eu coloque uma propriedade que não tem no db[0] a propriedade irá retornar null
            return obj.telefone_fixo;
        }
    },

    Query: {
        usuario() { return db[1] }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen();