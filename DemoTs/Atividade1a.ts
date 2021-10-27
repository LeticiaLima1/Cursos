//A proposta da atividade é contar o número de vogais. Assim, escolhi uma palavra aleatória
//para o teste, estabelecendo-a como variável.


var letras = 'leticia';        // criação da variável
var contador = 0; //criação a variável contador e para iniciar com 0.

for (var i = 0; i < letras.length; i++) {//laço de repetição para percorrer os caracteres da palavra

    var letra = letras.charAt(i); //atribuir a uma variável a letra atual do laço

    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        contador++;
    }// if para estabelecer quais são as vogais e setar no contador a quantidade 

}
console.log(contador); // imprimir a quantidade de vogais
