let encontrarValores: Array<number>  = [ 40, 30, 50, 20];

function organizarValores(lista: Array<number>): Array<number>{

    let listaOrganizada: Array<number> = [];//recebendo lista vazia

    listaOrganizada.push(Math.max.apply(null, lista));//adiciona máximo

    listaOrganizada.push(Math.min.apply(null, lista));//adiciona mínimo

    const soma: number = lista.reduce((a, b) => a + b, 0);//constante usando o reduce para obter a soma dos elementos
    const media: number = soma / lista.length;//constante para obter a media
    listaOrganizada.push(media);//adiciona média

    return listaOrganizada; //retorna uma nova lista organizada
}

console.log(organizarValores(encontrarValores));