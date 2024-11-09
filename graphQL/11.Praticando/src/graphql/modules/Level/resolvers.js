const database  = require("../../../database")

module.exports = {
    Query: {
        levels: () => database.Levels
    }
};
