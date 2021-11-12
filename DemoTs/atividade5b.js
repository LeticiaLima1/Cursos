var Palavra = /** @class */ (function () {
    function Palavra() {
        this.vogais = ['a', 'e', 'i', 'o', 'u']; //propriedade 
        this.contador = 0; //propriedade
    }
    Palavra.prototype.contarVogais = function (palavra) {
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
function contarVogaisHtml() {
    var palavra2 = new Palavra(); //declara variável, tipa variável e cria nova palavra
    var letras = document.getElementById('idTexto').value; //busca o valor digitado
    var numeroVogais = palavra2.contarVogais(letras); //declara o tipo da variável e conta o número de vogais
    var element = document.getElementById('IdQuantidaDeVogais'); //declara constante,
    //tipa como HTML // e recebe o componente 
    element.innerHTML = numeroVogais.toString(); //imprime a quantidade de vogais na tela 
}
