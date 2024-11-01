const { gql, ApolloServer } = require("apollo-server");

const db = [
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
]

const perfis = [
    { id: 1, descricao: "ADMIN" },
    { id: 2, descricao: "NORMAL" }
]

const typeDefs = gql`
    type Usuario {
        id: ID
        nome: String
        email: String
        telefone: String
        perfil: Perfil
        #É possível passar um tipo que seja de uma interface criada
    },

    type Perfil {
        id: Int
        descricao: String
    }

    type Query {
        usuario(id: ID): Usuario
        perfis: [Perfil]
    }
`;

const resolvers = {
    Usuario: {
        perfil(obj) {
            return perfis.find(perfil => perfil.id === obj.id);
        }
    },

    Query: {
        usuario(_, args) {
            /**
             * Na Query o primeiro parâmetro sempre vem com nulo, por isso não é utlizado aqui
            */
            return db.find(user => user.id == args.id);
            /**
             * Ao passar o um argumento do tipo ID, é bom usar so dois sinais de comparação
             * Porque o graphQL, no localhost:4000 faz com que o valor recebido venha do tipo string
             * e aqui quando acessamos ele fica do tipo Int
            */
        },
        perfis() { return perfis } 
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen();