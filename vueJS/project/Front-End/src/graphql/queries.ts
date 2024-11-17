import { gql } from '@apollo/client/core';

export const GetAllUsers = gql`
    query getAllUsers {
        users {
            name
            id
            department
            email
            skill
            position {
                salary
                level
            }
        }
    }
`;

export const GetLevels = gql`
    query getLevels {
        getLevel {
            level
            salary
        }
    }
`;

export const GetUser = gql`
    query GetUser($id: ID!) {
        user(id: $id) {
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

