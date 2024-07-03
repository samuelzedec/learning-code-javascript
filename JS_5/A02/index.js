function Book(title, pages, tags, author) {
  this.title = title, 
  //this: referência uma função construtora, cria um objeto automático
  this.pages = pages
  this.tags = tags
  this.author = author
  this.publish = false 
  this.inStock = 0
  this.addInStock = function(quantity) {
    this.inStock += quantity
  }
  this.published = function() {
    if(this.publish === false) {
      this.publish = true
    } else {
      this.publish = false
    }
  }
}
const author = {name: 'Cristopher Paolini'}
const tags = ['fantasy', 'adventure']
const eragon = new Book("Eragon", 468, tags, author)
eragon.published()
eragon.addInStock(67)
console.log(eragon)

const elset = new Book('Eldest', 644, tags, author)
console.log(elset)