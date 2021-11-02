function encontrarMaximo(array) {
    return Math.max.apply(null, array);
}
function encontrarMinimo(array) {
    return Math.min.apply(null, array);
}
function encontrarMedia(array) {
    let total = 0;
    array.forEach(element => {
        total = total + element;
    });
    return total / array.length;
}
const valores = [20, 30, 40, 50]; //constante que declara valores do array
const maxValor = encontrarMaximo(valores); //constante que recebe o valor da função que retorna o valor máximo
const minValor = encontrarMinimo(valores); // constante que recebe valor da função que retorna o valor mínimo
const medValor = encontrarMedia(valores); //constante que recebe valor da função que retorna o valor máximo
console.log(maxValor); //impressão valor máximo
console.log(minValor); // impressão valor mínimo
console.log(medValor); //impressão valor médio
//# sourceMappingURL=Atividade3funcional.js.map