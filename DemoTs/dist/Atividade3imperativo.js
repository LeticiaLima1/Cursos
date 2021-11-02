const arrayNumeros = [20, 30, 40, 50]; //array de números
const maximoValor = Math.max.apply(null, arrayNumeros); //constante para obter o valor máximo
const minimoValor = Math.min.apply(null, arrayNumeros); //constante para obter o valor mínimo
const soma = arrayNumeros.reduce((a, b) => a + b, 0); //constante usando o reduce para obter a soma dos elementos
const media = soma / arrayNumeros.length; //usar soma e divisão pelos elementos e obter a média 
console.log(maximoValor); //impressão valor máximo
console.log(minimoValor); //impressão valor mínimo
console.log(media); //impressão média
//# sourceMappingURL=Atividade3imperativo.js.map