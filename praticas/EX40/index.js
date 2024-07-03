const Author = require("./Author");

const lucas = new Author('Lucas Lima')

const postOne = lucas.newPost('Eu gosto de python', 'Estou amando python e pretendo seguir carreira por um tempo e depois migrar para Swift')
postOne.addComment('Samuel Zedec', 'Que bom irmão, que você tenha uma ótima carreira como programador')

const postTwo = lucas.newPost('Sidia', 'Agradeço a SIDIA pela oportunidade durante esse 2 anos!!')
postTwo.addComment('Samuel Zedec', 'Que venha apple agora')

console.log(postTwo)