class ListaNumeros{//declarar classe 
    
    listaOrganizada: Array<number>;//proprieade

    organizarValores(lista: Array<number>): Array<number>{
        this.listaOrganizada = [
            Math.max.apply(null, lista), 
            Math.min.apply(null, lista), 
            lista.reduce((a, b) => a + b, 0) / lista.length 
        ]
        return this.listaOrganizada; //retorna uma nova lista organizada
    }
}


const numeros: Array<number>  = [40, 30, 50, 20]; //declara o array dos números a serem trabalhados;

let listaNumeros: ListaNumeros = new ListaNumeros(); //cria a variável do tipo lista de números e recebe nova lista;

let numerosOrganizados: Array<number> = listaNumeros.organizarValores(numeros); //recebe os valores organizados

console.log(numerosOrganizados);//impressão - loga os números organizados