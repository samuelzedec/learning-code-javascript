const { gql, ApolloServer } = require('apollo-server');

/**
 * Scalar Types
 * - Int
 * - Float
 * - String
 * - Boolean
 * - ID (identificador exclusivo para tipos complexos)
 * - Para array passamos o colchetes e o tipo dentro dele
 * Utilizadade: 
 * - Usamos para definir as propriedades do objeto
*/


//type Query = Define o ponto de entrada para nossas pesquisa, a partir dele que começamos a fazer consultas
const typeDefs = gql`
    type Query {
        idade: Int 
        salario: Float
        nome: String
        ativo: Boolean
        id: ID
        tecnologias: [String!]!
        #Nesse caso tanto o array tem quer algum valor, e seus valores não pode ser nulo
    }
`;
/**
 * Caso a propriedade tenha que retornar algo que não null, no caso sendo obrigatório ela ter 
 * um valor é usado '!' no final do Scalar Type 
*/

//resolvers: serve para atribuir valores para as consultas
//cada propriedade do type Query tem q ser definida como uma função no resolvers 
const resolvers = {
    Query: {
        idade() { return 19; },
        salario() { return 879.99; },
        nome() { return "GraphQL"; },
        ativo() { return true; },
        id() { return 12345667; },
        tecnologias() { return ["C#", ".NET", "Asp .Net Core", "Blazor Web Assembly"]},
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen();