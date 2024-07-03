export class Component {
  #element = null
  constructor(tag, parent, options) {
    this.tag = tag
    this.parent = parent
    this.options = options
    this.build()
    /*
      Inicialização Imediata: Chamar this.build() no construtor garante que o elemento seja criado e configurado imediatamente quando uma nova instância de Component é criada. Isso simplifica o uso da classe, pois o usuário não precisa se lembrar de chamar build() separadamente após criar uma instância.
    */
  }

  getElement() {
    return this.#element
  }

  build() {
    this.#element = document.createElement(this.tag)
    Object.assign(this.#element, this.options)
    return this
    /*
      • Retornar this permite que métodos sejam encadeados (chaining). Isso significa que podemos chamar vários métodos em sequência em uma única linha de código.

      • Exemplo: const myComponent = new Component('div', '#app', { id: 'myDiv' }).build().render()
    */
  }

  render() {
    if(this.parent instanceof Component) {
      this.parent.getElement().append(this.#element)
      /*
        Como o this.parent aqui é uma instância do Component, logo elá tem o método getElement(), que irá retornar o seu #element.

        Exemplo:
        essa div é uma variavel que foi criada pela class Component
        this.parent = div
        seria a mesma coisa que div.getElement(), assim iriamos acessar o seu elemento.
        dps q acessamos, podemos adicionar o #element da instância atual
      */
    } else {
      document.querySelector(this.parent).append(this.#element)
    }
  }
}