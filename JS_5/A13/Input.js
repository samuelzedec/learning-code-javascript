import { Component } from "./Component.js";

export class Input extends Component {
  constructor(parent, options, type = 'text') {
    super('input', parent, Object.assign({}, options, {type}))
  }
}