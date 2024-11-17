import database from "../../database";

export default {
    User: {
        position: ({ position }) => {
            const levelData = database.Level.find(x => x.id == position);

            if (!levelData) 
                throw new Error(`Level data not found`);

            const { level, salary } = levelData;
            return { level, salary };
        }
    },

    Query: {
        users: () => database.Users,
        user: (_, { id }) => {
            const user = database.Users.find(x => x.id == id);

            if (!user)
                throw new Error("User not found");

            return user;
        },
        getLevel: () => database.Level
    },

    Mutation: {
        createUser: (_, { data }) => {
            if (database.Users.find(x => x.email == data.email)) 
                throw new Error("Email already exists");

            const lastUser = database.Users[database.Users.length - 1];
            const newUser = { id: lastUser.id + 1, ...data };
            database.Users.push(newUser);
            return newUser;
        },

        updateUser: (_, { id, data }) => {
            if (database.Users.find(x => x.email == data.email)) 
                throw new Error("Email already exists");
            
            const index = database.Users.findIndex(x => x.id == id);
            if (index < 0)
                throw new Error("User not found");

            const updatedUser = { ...database.Users[index], ...data };
            database.Users[index] = updatedUser;

            return updatedUser;
        },

        deleteUser: (_, { id }) => {
            const index = database.Users.findIndex(x => x.id == id);

            if (index < 0)
                throw new Error("User not found");

            database.Users.splice(index, 1);
            return true;
        }
    }
}