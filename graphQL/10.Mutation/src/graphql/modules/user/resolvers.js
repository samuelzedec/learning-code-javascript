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
        //Aqui estamos dizendo que estamos pegando a propriedades data do args usando a desestruturação
        criarUsuario(_, { data }) {
            const { email } = data;

            if (db.usuarios.some(x => x.email == email))
                throw new Error(`Usuário já existente: ${data.nome}`);
            
            const newUser = {
                ...data,
                id: generateID(db.usuarios),
                perfil: 2
            }

            db.usuarios.push(newUser);
            console.log(newUser);

            return newUser;
        },

        atualizarUsuario(_, { id, data }) {
            const user = db.usuarios.find(x => x.id == id);

            if (!user)
                throw new Error("Não há usuário com esse id");

            user.email = data.email;
            user.nome = data.nome;
            user.telefone = data.telefone;

            return user;
        }
    }
}
