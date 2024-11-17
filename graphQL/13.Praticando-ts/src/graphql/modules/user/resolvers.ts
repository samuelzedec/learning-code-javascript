import data from "../../../database";

function generate() {
    return data.Users[data.Users.length - 1].id + 1;
};

export default {
    User: {
        level: (obj : any) => {
            const l = data.Levels.find(x => x.id == obj.level);

            const l2 = {
                level: l?.level,
                salary: l?.salary
            }

            return l2;
        }
    },

    Query: {
        users() {
            return data.Users
        },
        user(_, args) { return data.Users.find(x => x.id == args.id) }
    },

    Mutation: {
        newUser(_ : any, args : any) {
            const user = {
                ...args, id: generate(), level: "C"
            }
            data.Users.push(user);
            return user;
        }
    }
}