const arrayNumeros: Array<number> = [20, 30, 40, 50]; //array de números

const listaOrganizada: Array<number> = [Math.max.apply(null, arrayNumeros), Math.min.apply(null, arrayNumeros), arrayNumeros.reduce((a, b) => a + b, 0) / arrayNumeros.length ]
//declara a função, tipa a Lista e função para encontrar máximo, mínimo e média.

console.log(listaOrganizada);//impressão da nova lista
