const { gql, ApolloServer } = require('apollo-server');

const produtos = [
    { id: 2131231, nome: "Fone De Ouvido", valor: 19.99 },
    { id: 404040, nome: "MacBook Pro M3 Max", valor: 18999.99}
]

const usuarios = [
    { idade: 19, salario: 799.99, nome: "Samuel", ativo: false, id: 4002 },
    { idade: 22, salario: 2799.99, nome: "Ryan", ativo: true, id: 4003 }
]

const typeDefs = gql`
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

    type Query {
        usuarios: [Usuario!]!
        produtos: [Produto!]!

        #Aqui estamo dizendo que iremos querer um usuario no ID tal
        usuario(id: Int, nome: String): Usuario
        produto(nome: String, id: Int): Produto
    }
`;

const resolvers = {
    Query: {
        usuarios() {
            return usuarios;
        },

        produtos() {
            return produtos;
        },

        /**
         * passamos o args que irá ser um objeto com os parâmetros que definimos no typeDefs
        */ 
        usuario(obj, args) {
            const { id, nome } = args;
            const user = usuarios.find(user => user.id === id);

            if (user) return user
            
            return usuarios.find(user => user.nome === nome);
        },

        produto(obj, args) {
            const { nome, id } = args;
            const product = produtos.find(prod => prod.nome === nome);

            if (product) return product;
            
            return produtos.find(produto => produto.id === id);
        }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen();