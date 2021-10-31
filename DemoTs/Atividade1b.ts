//A proposta da atividade é contar o número de vogais. Assim, escolhi uma palavra aleatória
//para o teste, estabelecendo-a como variável.

function contarVogais(): void{//declaração da função
    const letras = (<HTMLInputElement>document.getElementById('idTexto')).value;//busca o valor digitado
    let contador : number = 0; //criação a variável contador e para iniciar com 0.
   
    for (let i = 0; i < letras.length; i++) { //laço de repetição para percorrer os caracteres da palavra
        let letra = letras.charAt(i); //atribuir a uma variável a letra atual do laço
        if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
            contador++;
        } // if para estabelecer quais são as vogais e setar no contador a quantidade  
    }
    const element: HTMLElement = document.getElementById('IdQuantidaDeVogais') as HTMLElement
    element.innerHTML =  contador.toString(); //imprime a quantidade de vogais na tela 
}