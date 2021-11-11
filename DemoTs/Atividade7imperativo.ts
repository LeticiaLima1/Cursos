class AListaDeNumeros{//declarar classe 
    maiorNumero : number; // propriedade
    menorNumero : number; //propriedade
    mediaNumero : number; //propriedade
    listaOrganizada: Array<number>;//proprieade

    // const arrayNumeros = [20, 30, 40, 50]; //array de números
    
    maximoValor(arrayNumeros: Array<number>){
        this.maiorNumero =  Math.min.apply(null, arrayNumeros);
    }
    // let maximoValor = Math.max.apply(null, arrayNumeros);//constante para obter o valor máximo

    minimoValor(arrayNumeros: Array<number>){
        this.menorNumero = Math.min.apply(null, arrayNumeros);//constante para obter o valor mínimo
    }
    // let minimoValor = Math.min.apply(null, arrayNumeros);//constante para obter o valor mínimo

    media(arrayNumeros: Array<number>){
        let soma = arrayNumeros.reduce((a, b) => a + b, 0);//constante usando o reduce para obter a soma dos elementos
        this.mediaNumero = soma / arrayNumeros.length; //usar soma e divisão pelos elementos e obter a média 
    }
    // let soma = arrayNumeros.reduce((a, b) => a + b, 0);//constante usando o reduce para obter a soma dos elementos
    // let media = soma / arrayNumeros.length; //usar soma e divisão pelos elementos e obter a média 

    organizarLista(arrayNumeros: Array<number>){
        this.maiorNumero =  Math.min.apply(null, arrayNumeros);
        this.menorNumero = Math.min.apply(null, arrayNumeros);
        let soma = arrayNumeros.reduce((a, b) => a + b, 0);//constante usando o reduce para obter a soma dos elementos
        this.mediaNumero = soma / arrayNumeros.length;
    }
}

const arrayNumeros = [20, 30, 40, 50]; //array de números

const listanumeros: AListaDeNumeros = new AListaDeNumeros;
// const AListaDeNumeros: AListadeNumeros = new AListaDeNumeros;

let maximovalor = listanumeros.maximoValor(arrayNumeros);
// let maximovalor = listanumeros.maximovalor;

let minimovalor = listanumeros.minimoValor(arrayNumeros);
// let minimovalor = listanumeros.minimovalor;

let media = listanumeros.media(arrayNumeros);
// let media = listanumeros.media;

console.log(maximoValor); //impressão valor máximo
console.log(minimoValor); //impressão valor mínimo
console.log(media); //impressão média