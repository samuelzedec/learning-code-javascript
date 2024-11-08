const { gql, ApolloServer } = require("apollo-server");

const db = {
    usuarios: [
        {
            id: 1,
            nome: "Paulo",
            email: "paulo@email.com",
            telefone: "11 1234 1234",
            perfil: 1
        },
        {
            id: 2,
            nome: "Lucas",
            email: "lucas@email.com",
            telefone: "43 1234 1234",
            perfil: 1
        }
    ],

    perfis: [
        { id: 1, descricao: "ADMIN" },
        { id: 2, descricao: "NORMAL" }
    ],
}

const typeDefs = gql`
    type Usuario {
        id: ID
        nome: String
        email: String
        telefone: String
        perfil: Perfil
    }

    type Perfil {
        id: ID
        descricao: String
    }

    type Query {
        usuario(id: ID): Usuario
        perfil: [Perfil]
        usuarios: [Usuario]
    }
`;

const resolvers = {
    Usuario: {
        perfil(obj) {
            return db.perfis.find(perfil => perfil.id == obj.id)
        }
    },

    Query: {
        usuario(_, args) { return db.usuarios.find(user => user.id == args.id) },
        perfil() { return db.perfis },
        usuarios: () => db.usuarios //É possível fazer usando o arrow function
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen();