import { gql } from "apollo-server";
export default gql`
    type User {
        id: ID
        name: String
        email: String
        position: Level
        skill: String
        department: String
    } 

    enum LevelEnum {
        JUNIOR
        MID
        SENIOR
        INTERN
        LEAD
        MANAGER
    }

    type Level {
        level: LevelEnum!
        salary: String!
    }

    input UserInput {
        name: String!
        email: String!
        position: ID!
        skill: String!
        department: String!
    }

    type Query {
        users: [User]
        user(id: ID!): User
        getLevel: [Level]
    }

    type Mutation {
        createUser(data: UserInput): User
        updateUser(id: ID!, data: UserInput): User
        deleteUser(id: ID!): Boolean!
    }

`;
