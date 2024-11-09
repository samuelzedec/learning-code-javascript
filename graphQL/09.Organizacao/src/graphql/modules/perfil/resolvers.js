const db = require("../../../db");

module.exports = {
    Query: {
        perfil() { return db.perfis },
    }
} 