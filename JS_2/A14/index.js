function calculoMedia(x, y) {
    const media = (x + y) / 2
    return media
}
let resultado = calculoMedia(9, 2)
console.log(resultado)

function criarProduto(nome, preco) {
    const produto = {
        nome, //nome: nome
        preco, //preco: preco 
        estoque: 1
    }
    return produto
}
const prod = criarProduto('Maria José', 10)
console.log(prod)
console.log(typeof prod)

function areaRetangular(area, base) {
    return area * base
}

function areaQuadrada(lado) {
    return areaRetangular(lado, lado)
}
console.log(areaRetangular(9,3))
console.log(areaQuadrada(9))

function olaMundo() {
    let texto = "..."
    return texto
    texto = "Olá, mundo!"
    console.log(texto)
  }
  console.log(olaMundo())


  function maiorIdade(idade) {
    if(idade >= 18) {
        return 'Maior de idade'
    } else {
        return 'Menor de idade'
    }
  }

  console.log(maiorIdade(9))