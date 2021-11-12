"use strict";
exports.__esModule = true;
exports.Palavra = void 0;
var Palavra = /** @class */ (function () {
    function Palavra() {
        this.vogais = ['a', 'e', 'i', 'o', 'u']; //propriedade 
        this.contador = 0; //propriedade
    }
    Palavra.prototype.nrVogais = function (palavra) {
        for (var i = 0; i < palavra.length; i++) { //laço de repetição para percorrer os caracteres da palavra
            var letra = palavra.charAt(i).toLowerCase(); //atribuir a uma variável a letra atual do laço
            if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
                this.contador++;
            }
        } // if para estabelecer quais são as vogais e setar no contador a quantidade  
        return this.contador; //retorna o número de vogais contadas
    }; // funções, métodos das classes para implementar a apresentação
    return Palavra;
}());
exports.Palavra = Palavra;
var palavra = new Palavra();
var nrVogais = palavra.nrVogais('leti'); // criação do objeto
console.log(nrVogais); //impressão do número de vogais 
