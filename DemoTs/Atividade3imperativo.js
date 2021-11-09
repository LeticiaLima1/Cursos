var arrayNumeros = [20, 30, 40, 50]; //array de números
var maximoValor = Math.max.apply(null, arrayNumeros); //constante para obter o valor máximo
var minimoValor = Math.min.apply(null, arrayNumeros); //constante para obter o valor mínimo
var soma = arrayNumeros.reduce(function (a, b) { return a + b; }, 0); //constante usando o reduce para obter a soma dos elementos
var media = soma / arrayNumeros.length; //usar soma e divisão pelos elementos e obter a média 
console.log(maximoValor); //impressão valor máximo
console.log(minimoValor); //impressão valor mínimo
console.log(media); //impressão média
