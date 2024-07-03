import { Component } from "./Component.js";
import { Input } from "./Input.js";
import { Label } from "./Label.js";
import { Form } from "./Form.js";

const title = new Component('h1', 'body', {textContent: 'Olá, Mundo!'}).render()

const div = new Component('div', 'body', {id: 'div'})
const form = new Form(div, {id: 'form'})
const label = new Label('Marcar' ,form, {id: 'labelTest', class: 'test', htmlFor: 'inputTest'})
const input = new Input(form, {id: 'inputTest', class: 'test', name: 'testFor'}, 'radio')

div.render()
form.render()
label.render()
input.render()

form.addChildren(
  new Component('br'),
  new Label('Data de nascimento', form, {htmlFor: 'meudeus'}),
  new Input(form, {id: 'meudeus'})
)