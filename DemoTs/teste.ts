class Numeros{//declarar classe 
    maiorValor: number;//propriedade 
    menorValor: number;//propriedade 
    media: number;//propriedade 
    listaOrganizada: Array<number>;//propriedade 

    organizaNumeros(listanumerica: Array<number>): Array<number>{
        this.maiorValor = Math.max.apply(null, listanumerica);
        this.menorValor = Math.min.apply(null, listanumerica);
        this.media = listanumerica.reduce((a, b) => a + b, 0)/listanumerica.length;
        this.listaOrganizada = [Math.max.apply(null, listanumerica), Math.min.apply(null, listanumerica), listanumerica.reduce((a, b) => a + b, 0)/listanumerica.length];
        return this.listaOrganizada;
    }
}

let minhaClasseOrganizadora: Numeros = new Numeros();

const listaASerOrganizada: Array<number> = [20, 30, 40, 50];

let minhaLisaOrganizada: Array<number> = minhaClasseOrganizadora.organizaNumeros(listaASerOrganizada);

console.log(minhaLisaOrganizada);//impressão da lista organizada