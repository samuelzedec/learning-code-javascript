const database  = require("../../../database")

module.exports = {
    User: {
        level: (obj) => {
            const { level, salary } = database.Levels.find(x => x.id == obj.level);
            return { level, salary };
        }
    },

    Query: {
        users() { return database.Users },
        user(_, args) { return database.Users.find(x => x.id == args.id) }
    }
}