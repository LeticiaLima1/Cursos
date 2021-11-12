var encontrarValores = [40, 30, 50, 20];
function organizarValores(lista) {
    var listaOrganizada = []; //recebendo lista vazia
    listaOrganizada.push(Math.max.apply(null, lista)); //adiciona máximo
    listaOrganizada.push(Math.min.apply(null, lista)); //adiciona mínimo
    var soma = lista.reduce(function (a, b) { return a + b; }, 0); //constante usando o reduce para obter a soma dos elementos
    var media = soma / lista.length; //constante para obter a media
    listaOrganizada.push(media); //adiciona média
    return listaOrganizada; //retorna uma nova lista organizada
}
console.log(organizarValores(encontrarValores));
