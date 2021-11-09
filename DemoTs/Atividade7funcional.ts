class ListaNumeros{//declarar classe 
    maiorNumero: number; // propriedade
    menorNumero: number; //propriedade
    mediaNumero: number; //propriedade
    listaOrganizada: Array<number>;//proprieade

    organizarValores(lista: Array<number>): Array<number>{

        this.listaOrganizada = [];//recebendo lista vazia

        this.maiorNumero = Math.max.apply(null, lista);//adiciona máximo

        this.menorNumero = Math.min.apply(null, lista);//adiciona mínimo

        const soma: number = lista.reduce((a, b) => a + b, 0);//constante usando o reduce para obter a soma dos elementos
        this.mediaNumero = soma / lista.length;//constante para obter a media
        
        this.listaOrganizada.push(this.maiorNumero);//adiciona maior valor 
        this.listaOrganizada.push(this.menorNumero);//adiciona menor valor
        this.listaOrganizada.push(this.mediaNumero);//adiciona valor médio


        return this.listaOrganizada; //retorna uma nova lista organizada
    }
}

const numeros: Array<number>  = [40, 30, 50, 20]; //declara o array dos números a serem trabalhados;
let listaNumeros: ListaNumeros = new ListaNumeros(); //cria a variável do tipo lista de números e recebe nova lista;
let numerosOrganizados: Array<number> = listaNumeros.organizarValores(numeros); //recebe os valores organizados

console.log(numerosOrganizados);//impressão - loga os números organizados


