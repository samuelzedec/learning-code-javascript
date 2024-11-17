const database = require("../../../database")

function generate() {
    return database.Users[database.Users.length - 1].id + 1;
};

module.exports = {
    User: {
        level: (obj) => {
            const { level, salary } = database.Levels.find(x => x.id == obj.level);
            return { level, salary };
        }
    },

    Query: {
        users() { return database.Users },
        user(_, { id }) { return database.Users.find(x => x.id == id) }
    },

    Mutation: {
        newUser(_, args) {
            const user = {
                ...args, id: generate(), level: "C"
            }
            database.Users.push(user);
            return user;
        }
    }
}