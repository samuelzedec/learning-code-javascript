import { gql } from '@apollo/client/core';

export const CreateUser = gql `
    mutation CreateUser($data: UserInput) {
        createUser(data: $data) {
            id
            name
            email
            position {
                level
                salary
            }
            skill
            department
        }
    }
`;