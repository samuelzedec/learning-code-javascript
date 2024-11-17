import { gql } from "apollo-server";

export default gql`
    type User {
        id: ID
        name: String
        email: String
    }

    input UserInput {
        name: String
        email: String
    }

    type Query {
        users: [User]
    }

    type Mutation {
        createUser(data: UserInput!): User
    }

    #Seu uso so pode ser ativado, quando o PubSub tiver configurado no index.ts
    type Subscription {
        userAdded: User
    }
`;