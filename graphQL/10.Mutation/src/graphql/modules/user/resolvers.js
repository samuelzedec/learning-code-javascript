const db = require("../../../db");

function generateID(lista) {
    let newID = null;
    let last = lista[lista.length - 1];
    
    newID = (!last) ? 0 : last.id;

    return ++newID;
}

module.exports = {
    Usuario: {
        perfil(obj) {
            return db.perfis.find(perfil => perfil.id == obj.perfil)
        }
    },
    
    Query: {
        usuario(_, args) { return db.usuarios.find(user => user.id == args.id) },
        usuarios: () => db.usuarios
    },

    Mutation: {
        criarUsuario(_, args) {
            // console.log(args);
            // return args;
            const newUser = {
                ...args,
                id: generateID(db.usuarios),
                perfil: 2
            }

            db.usuarios.push(newUser);
            console.log(newUser);

            return newUser;
        }
    }
}
