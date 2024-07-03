class Product {
  constructor(name, description, price, inStock) {
    this.name = name
    this.description = description
    this.price = price
    this.inStock = inStock
  }

  addToStock(quantity) {
    return this.inStock += quantity
  }

  calculateDiscount(discount) {
    this.price *= ((100 - discount) / 100)
  }
}

const car = new Product('Lamborghini', 'Melhor carro do mundo!', 1000, 2)
console.log(car)
car.addToStock(4)
console.log(car)
car.calculateDiscount(20)
console.log(car)