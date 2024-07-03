import { Component } from "./Component.js";

export class Form extends Component {
  constructor(parent, options) {
    super('form', parent, options)
  }

  addChildren(...children) {
    children.forEach(child => {
      this.getElement().append(child.getElement())
    })

    /*
      * Nesse caso o this está referenciando a class Form.
      * O this.getElement(): está referenciando o a tag form.
      * O child é a instância que foi passada como parâmetro, e usamos o getElement() para poder acessar seu #element
    */
  }
}