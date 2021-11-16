var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pessoa = /** @class */ (function () {
    function Pessoa() {
    }
    Pessoa.prototype.getNome = function () {
        return this.nome;
    };
    Pessoa.prototype.getBio = function () {
        return this.bio;
    };
    return Pessoa;
}());
var AdaLovelace = /** @class */ (function (_super) {
    __extends(AdaLovelace, _super);
    function AdaLovelace() {
        var _this = _super.call(this) || this;
        _this.nome = 'Ada Lovelace'; //atribui o nome
        _this.bio = 'Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina';
        return _this;
    } //atribui a bio
    AdaLovelace.prototype.getCriadora = function () {
        return this.nome;
    };
    return AdaLovelace;
}(Pessoa));
var AlanTuring = /** @class */ (function (_super) {
    __extends(AlanTuring, _super);
    function AlanTuring() {
        var _this = _super.call(this) || this;
        _this.nome = 'Alan Turing'; //atribui o nome
        _this.bio = 'Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia';
        return _this;
    } //atribui a bio
    return AlanTuring;
}(Pessoa));
var NikolaTesla = /** @class */ (function (_super) {
    __extends(NikolaTesla, _super);
    function NikolaTesla() {
        var _this = _super.call(this) || this;
        _this.nome = 'Ada Lovelace'; //atribui o nome
        _this.bio = 'Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina';
        return _this;
    }
    return NikolaTesla;
}(Pessoa));
var NicolauCopernico = /** @class */ (function (_super) {
    __extends(NicolauCopernico, _super);
    function NicolauCopernico() {
        var _this = _super.call(this) || this;
        _this.nome = 'Nikola Tesla'; //atribui o nome
        _this.bio = 'Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada';
        return _this;
    }
    return NicolauCopernico;
}(Pessoa));
var AdaLovelaceFactory = /** @class */ (function () {
    function AdaLovelaceFactory() {
    }
    AdaLovelaceFactory.getPessoa = function (idPessoa) {
        if (idPessoa == null) {
            return null;
        }
        return new AdaLovelace();
    };
    return AdaLovelaceFactory;
}());
function getCriadora(idPessoa) {
    var pessoa = AdaLovelaceFactory.getPessoa(idPessoa); //declara a variável do tipo pessoa e recebe a pessoa da classe factory
    if (pessoa != null) { //verificação se a pessoa não é nula
        console.log('Foi: ' + pessoa.getCriadora() + ' que criou a linguagem de programação'); //imprime o nome da pessoa criadora da linguagem de programação
    }
}
var idPessoa = 2; //id a ser usado no exemplo
getCriadora(idPessoa); //chamando a função
