const Post = require("./Post")

class Author {
  constructor(name) {
    this.name = name
    this.posts = []
  }

  writePost(title, body) {
    const post = new Post(title, body, this.name) //Passando so o this, você enviará o objeto inteiro
    this.posts.push(post)
    return post //Retornado, para que possa ser comentado depois
  }
}

module.exports = Author