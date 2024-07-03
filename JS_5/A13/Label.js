import { Component } from "./Component.js";

export class Label extends Component {
  constructor(text, parent, options) {
    super('label', parent, Object.assign({}, options, {textContent: text}))
    //O Object.assign(), pode receber quantos parâmetro vc quiser, que irá tudo como propriedade do primeiro
  }
}