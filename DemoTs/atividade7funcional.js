var ListaNumeros = /** @class */ (function () {
    function ListaNumeros() {
    }
    ListaNumeros.prototype.organizarValores = function (lista) {
        this.listaOrganizada = [
            Math.max.apply(null, lista),
            Math.min.apply(null, lista),
            lista.reduce(function (a, b) { return a + b; }, 0) / lista.length
        ];
        return this.listaOrganizada; //retorna uma nova lista organizada
    };
    return ListaNumeros;
}());
var numeros = [40, 30, 50, 20]; //declara o array dos números a serem trabalhados;
var listaNumeros = new ListaNumeros(); //cria a variável do tipo lista de números e recebe nova lista;
var numerosOrganizados = listaNumeros.organizarValores(numeros); //recebe os valores organizados
console.log(numerosOrganizados); //impressão - loga os números organizados
