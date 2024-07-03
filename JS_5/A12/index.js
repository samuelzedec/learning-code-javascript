class Property {
  constructor(area, price) {
    this.area = area
    this.price = price
  }

  getPricePerSquareMeter() {
    return this.price / this.area
  }
}
//extends: usamos para dizer q a class House herda a propriedades e métodos da class Property
class House extends Property { //aqui irá ter as mesmas propriedades e métodos de Property, mesmo não escrito nada
}

const land = new Property(200, 50000)
const someHouse = new House(120, 200000)

console.log(land)
console.log(someHouse)
console.log(someHouse instanceof Property)

class Apartament extends Property {
  #number
  constructor(area, price) {
    super(area, price) //super(): usado para passar os parâmetros para classe mãe, também pode acessar os métodos da classe mãe
    this.#number = 0
  }

  addNumber(number) {
    this.#number = number
    console.log(this.#number)
  }
}

const ap = new Apartament(300, 5000)
console.log(ap)
ap.addNumber(90)