"use strict";

//Média Aritmética Simples
var mediaSimples = function mediaSimples() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }
  var total = numbers.reduce(function (acc, num) {
    return acc + num;
  }, 0);
  return total / numbers.length;
};
console.log(mediaSimples(2, 6, 3, 7, 4));

//Média Aritmética Ponderada
var mediaPonderada = function mediaPonderada() {
  for (var _len2 = arguments.length, numbers = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    numbers[_key2] = arguments[_key2];
  }
  var media = numbers.reduce(function (acc, _ref) {
    var n = _ref.n,
      p = _ref.p;
    return acc += n * (p !== null && p !== void 0 ? p : 1);
  }, 0);
  var pond = numbers.reduce(function (acc, _ref2) {
    var p = _ref2.p;
    return acc += p !== null && p !== void 0 ? p : 1;
  }, 0);
  return media / pond;
};
console.log(mediaPonderada({
  n: 7,
  p: 2
}, {
  n: 9,
  p: 5
}, {
  n: 3,
  p: 1
}));

//Mediana
var mediana = function mediana() {
  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numbers[_key3] = arguments[_key3];
  }
  var ordenar = [].concat(numbers).sort(function (a, b) {
    return a - b;
  });
  var meio = Math.floor(ordenar.length / 2);
  if (ordenar.length % 2 !== 0) {
    return ordenar[meio];
  } else {
    //order = [3, 7, 8, 9, 14, 15]
    var numOne = ordenar[meio];
    var numTwo = ordenar[meio - 1];
    return "".concat(numOne, ", ").concat(numTwo);
  }
};
console.log(mediana(15, 14, 9, 8, 7, 3));

//Moda
var moda = function moda() {
  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numbers[_key4] = arguments[_key4];
  }
  var quantidades = numbers.map(function (num) {
    return [num, numbers.filter(function (n) {
      return num === n;
    }).length];
  });
  quantidades.sort(function (a, b) {
    return b[1] - a[1];
  });
  return quantidades[0][0];
};
console.log(moda(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4));