function encontrarMaximo(array){//montada a função para encontrar o valor máximo
    return Math.max.apply(null, array);
}

function encontrarMinimo(array){//montada a função para encontrar o valor mínimo
    return Math.min.apply(null, array);
}

function encontrarMedia(array){//montada a função para encontrar a média de valores
    let total=0;

    array.forEach(element => {
        total=total+element;
    });
    return total/array.length;
}

const valores = [20, 30, 40, 50]; //constante que declara valores do array
const maxValor = encontrarMaximo(valores); //constante que recebe o valor da função que retorna o valor máximo
const minValor = encontrarMinimo(valores); // constante que recebe valor da função que retorna o valor mínimo
const medValor = encontrarMedia(valores); //constante que recebe valor da função que retorna o valor máximo

console.log(maxValor); //impressão valor máximo
console.log(minValor); // impressão valor mínimo
console.log(medValor); //impressão valor médio
