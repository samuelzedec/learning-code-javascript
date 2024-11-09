const db = require("../../../db");

module.exports = {
    Usuario: {
        perfil(obj) {
            return db.perfis.find(perfil => perfil.id == obj.id)
        }
    },
    
    Query: {
        usuario(_, args) { return db.usuarios.find(user => user.id == args.id) },
        usuarios: () => db.usuarios
    }
}