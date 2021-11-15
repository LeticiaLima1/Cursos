class Numeros{//declarar classe 
    maiorValor: number;//propriedade 
    menorValor: number;//propriedade 
    media: number;//propriedade 
    listaOrganizada: Array<number>;//propriedade 

    organizaNumeros(listanumerica: Array<number>): Array<number>{
        this.maiorValor = Math.max.apply(null, listanumerica);//adiciona número maior
        this.menorValor = Math.min.apply(null, listanumerica); //adiciona o número menor
        this.media = listanumerica.reduce((a, b) => a + b, 0)/listanumerica.length;//adiciona a média
        this.listaOrganizada = [Math.max.apply(null, listanumerica), Math.min.apply(null, listanumerica), listanumerica.reduce((a, b) => a + b, 0)/listanumerica.length];
        return this.listaOrganizada;//retorna a lista com os valores organizados
    }
}

let minhaClasseOrganizadora: Numeros = new Numeros();

const listaASerOrganizada: Array<number> = [20, 30, 40, 50];

let minhaListaOrganizada: Array<number> = minhaClasseOrganizadora.organizaNumeros(listaASerOrganizada);

console.log(minhaListaOrganizada);//impressão da lista organizada