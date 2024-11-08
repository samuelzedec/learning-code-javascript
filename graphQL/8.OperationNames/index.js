const { gql, ApolloServer } = require("apollo-server");

const db = {
    users: [
        { id: 1, name: "Lucas", age: 19, position: "Python Developer", level: 2, salary: 5599.89 },
        { id: 2, name: "Samuel", age: 20, position: "C# Developer", level: 3, salary: 7599.89 },
        { id: 3, name: "Gabriel", age: 18, position: "JavaScript Developer", level: 1, salary: 3599.89 },
    ],

    levels: [
        { level: 1, seniority: "Junior" },
        { level: 2, seniority: "Full" },
        { level: 3, seniority: "Senior" },
    ]
}

const typeDefs = gql`
    enum LevelSeniority {
        Junior
        Full
        Senior
    }

    type RegisteredLevels {
        level: Int
        seniority: LevelSeniority
    }

    type UsersData {
        id: ID
        name: String
        age: Int
        position: String,
        level: RegisteredLevels
        salary: Float
    }

    type Query {
        user(id: ID!): UsersData
        users: [UsersData]
        levels: [RegisteredLevels]
    }
`;

const resolvers = {
    UsersData: {
        level(obj) {
            return db.levels.find(x => x.level === obj.level);
        }
    },

    Query: {
        user(_, args) {
            return db.users.find(x => x.id == args.id); 
        },

        users() {
            return db.users;
        },

        levels() {
            return db.levels;
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen();

