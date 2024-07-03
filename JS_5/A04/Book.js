class Book {
  constructor(title) {
    this.title = title
    this.published = false
  }

  publish() {
    if(this.published === false) {
      this.published = true
    } else {
      this.published = false
    }
  }
}
const eragon = new Book('Eragon')
const eldest = new Book('Elset')
eragon.publish()
console.log(eragon)
console.log(eldest)

console.log(eragon instanceof Book)
