var Figura = /** @class */ (function () {
    function Figura(id, nome, bio) {
        this.nome = nome; // um construtor para criar o objeto
        this.id = id;
        this.bio = bio;
    }
    Figura.prototype.apresentar = function () {
        return this.bio;
    }; // funções, métodos das classes para implementar a apresentação
    return Figura;
}());
var ada = new Figura(1, 'Ada', 'Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina');
var alanTuring = new Figura(2, 'Alan Turing', 'Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial');
var nikolaTesla = new Figura(3, 'Nikola Tesla', 'Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada.');
var nicolauCopernico = new Figura(4, 'Nicolau Copérnico', 'Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar.');
var listaFiguras = [ada, alanTuring, nikolaTesla, nicolauCopernico];
function apresentarPessoa(idBio) {
    var idFigura = Number(idBio.value);
    listaFiguras.forEach(function (figura) {
        if (figura.id === idFigura) {
            document.getElementById("Bio").innerHTML = figura.apresentar();
        }
    });
}
var apresente = nikolaTesla.apresentar(); // criação do objeto
//recebe valor da bio da pessoa selecionada dentro do id bio do parágrafo
console.log(apresente);
