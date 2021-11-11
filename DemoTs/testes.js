// class Cliente{
//     nome: string;
//     idade: number;
//     constructor(nome: string, idade: number) {// parametros
//         this.nome = nome; // um construtor para criar o objeto
//         this.idade = idade;
//     }
//     apresentar(){
//         return 'Olá, eu sou '+  this.nome+ ' e tenho ' + this.idade + ' anos ';
//     }// funções, métodos das classes para implementar a apresentação
// }
// let  joao: Cliente = new Cliente ('João', 25);
// let apresentacao = joao.apresentar();// criação do objeto
// console.log(apresentacao)
var Palavra = /** @class */ (function () {
    function Palavra() {
        this.vogais = ['a', 'e', 'i', 'o', 'u'];
        this.contador = 0;
    }
    Palavra.prototype.nrVogais = function (palavra) {
        console.log(this.contador);
        for (var i = 0; i < palavra.length; i++) { //laço de repetição para percorrer os caracteres da palavra
            console.log(this.contador);
            var letra = palavra.charAt(i); //atribuir a uma variável a letra atual do laço
            if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
                this.contador++;
            }
        } // if para estabelecer quais são as vogais e setar no contador a quantidade  
        return this.contador; //retorna o número de vogais contadas
    }; // funções, métodos das classes para implementar a apresentação
    return Palavra;
}());
var Leticia = new Palavra();
var nrVogais = Leticia.nrVogais('leti'); // criação do objeto
console.log(nrVogais);
