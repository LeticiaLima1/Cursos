var Numeros = /** @class */ (function () {
    function Numeros() {
    }
    Numeros.prototype.organizaNumeros = function (listanumerica) {
        this.maiorValor = Math.max.apply(null, listanumerica);
        this.menorValor = Math.min.apply(null, listanumerica);
        this.media = listanumerica.reduce(function (a, b) { return a + b; }, 0) / listanumerica.length;
        this.listaOrganizada = [Math.max.apply(null, listanumerica), Math.min.apply(null, listanumerica), listanumerica.reduce(function (a, b) { return a + b; }, 0) / listanumerica.length];
        return this.listaOrganizada;
    };
    return Numeros;
}());
var minhaClasseOrganizadora = new Numeros();
var listaASerOrganizada = [20, 30, 40, 50];
var minhaLisaOrganizada = minhaClasseOrganizadora.organizaNumeros(listaASerOrganizada);
console.log(minhaLisaOrganizada); //impressão da lista organizada
