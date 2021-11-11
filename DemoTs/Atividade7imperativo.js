var AListaDeNumeros = /** @class */ (function () {
    function AListaDeNumeros() {
    }
    // const arrayNumeros = [20, 30, 40, 50]; //array de números
    AListaDeNumeros.prototype.maximoValor = function (arrayNumeros) {
        this.maiorNumero = Math.min.apply(null, arrayNumeros);
    };
    // let maximoValor = Math.max.apply(null, arrayNumeros);//constante para obter o valor máximo
    AListaDeNumeros.prototype.minimoValor = function (arrayNumeros) {
        this.menorNumero = Math.min.apply(null, arrayNumeros); //constante para obter o valor mínimo
    };
    // let minimoValor = Math.min.apply(null, arrayNumeros);//constante para obter o valor mínimo
    AListaDeNumeros.prototype.media = function (arrayNumeros) {
        var soma = arrayNumeros.reduce(function (a, b) { return a + b; }, 0); //constante usando o reduce para obter a soma dos elementos
        this.mediaNumero = soma / arrayNumeros.length; //usar soma e divisão pelos elementos e obter a média 
    };
    return AListaDeNumeros;
}());
var arrayNumeros = [20, 30, 40, 50]; //array de números
var listanumeros = new AListaDeNumeros;
// const AListaDeNumeros: AListadeNumeros = new AListaDeNumeros;
var maximovalor = listanumeros.maximoValor(arrayNumeros);
// let maximovalor = listanumeros.maximovalor;
var minimovalor = listanumeros.minimoValor(arrayNumeros);
// let minimovalor = listanumeros.minimovalor;
var media = listanumeros.media(arrayNumeros);
// let media = listanumeros.media;
console.log(maximoValor); //impressão valor máximo
console.log(minimoValor); //impressão valor mínimo
console.log(media); //impressão média
