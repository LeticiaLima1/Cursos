var letras = 'leticia';
var contador = 0;
for (var i = 0; i < letras.length; i++) {
    var letra = letras.charAt(i);
    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        contador++;
    }
}
console.log(contador);
