const Author = require("./Author")

const john = new Author('John Doe')
const post = john.writePost('JavaScript', 'JS é muito louco')
post.addComment('Samuel Zedec', 'Papo reto chefe')
post.addComment('Lucas Lima', 'Larga essa merda')

console.log(john)
console.log(post)