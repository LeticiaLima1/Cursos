var Figura = /** @class */ (function () {
    function Figura(id, nome, bio) {
        this.nome = nome; // um construtor para criar o objeto
        this.id = id;
        this.bio = bio;
    }
    Figura.prototype.excluir = function () {
        return "idlistaFiltrada";
    }; // funções, métodos das classes para implementar a apresentação
    return Figura;
}());
var ada = new Figura(1, 'Ada', 'Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina'); //declaração de objeto a partir da Classe
var alanTuring = new Figura(2, 'Alan Turing', 'Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial'); //declaração de objeto a partir da Classe
var nikolaTesla = new Figura(3, 'Nikola Tesla', 'Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada.'); //declaração de objeto a partir da Classe
var nicolauCopernico = new Figura(4, 'Nicolau Copérnico', 'Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar.'); //declaração de objeto a partir da Classe
var listaFiguras = [ada, alanTuring, nikolaTesla, nicolauCopernico]; // declara a lista de pessoas 
function alterarFigura(idFigura, idNomeFigura, idBioFigura) {
    var idPessoaEscolhida = Number(idFigura.value); //declaração da constante do id escolhido
    //busca do valor da constante
    var nomeInformado = idNomeFigura.value; //compara nome informado com a pessoa escolhida
    var bioInformada = idBioFigura.value;
    listaFiguras.forEach(function (figura) {
        if (figura.id === idPessoaEscolhida) { //compara id escolhido com o id da pessoa escolhida
            figura.nome = nomeInformado; //altera o nome escolhido;
            figura.bio = bioInformada; //altera a bio escolhida
        }
        document.getElementById("idlistaFiltrada").innerHTML = JSON.stringify(listaFiguras); //recebe o valor da pessoa filtrada já sem a pessoa excluída
    });
    document.getElementById("idLista").innerHTML = JSON.stringify(listaFiguras); //recebe o novo nome
}
