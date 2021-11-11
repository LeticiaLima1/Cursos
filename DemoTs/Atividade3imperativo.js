var arrayNumeros = [20, 30, 40, 50]; //array de números
var listaOrganizada = [Math.max.apply(null, arrayNumeros), Math.min.apply(null, arrayNumeros), arrayNumeros.reduce(function (a, b) { return a + b; }, 0) / arrayNumeros.length];
//declara a função, tipa a Lista e função para encontrar máximo, mínimo e média.
console.log(listaOrganizada); //impressão da nova lista
