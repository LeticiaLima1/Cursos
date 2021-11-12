class Palavra{//criação da classe 

    vogais: Array<string> = ['a', 'e', 'i', 'o', 'u'];//propriedade 
    contador: number = 0;//propriedade
       
    contarVogais(palavra : string): number{
        for (let i = 0; i < palavra.length; i++) { //laço de repetição para percorrer os caracteres da palavra
            let letra: String = palavra.charAt(i).toLowerCase(); //atribuir a uma variável a letra atual do laço
            if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
                this.contador++;
            } 
        } // if para estabelecer quais são as vogais e setar no contador a quantidade  
        return this.contador; //retorna o número de vogais contadas
    }// funções, métodos das classes para implementar a apresentação
}

function contarVogaisHtml(){
    let palavra2: Palavra = new Palavra ();//declara variável, tipa variável e cria nova palavra
    const letras: string = (<HTMLInputElement>document.getElementById('idTexto')).value;//busca o valor digitado
    let numeroVogais: number = palavra2.contarVogais(letras);//declara o tipo da variável e conta o número de vogais
    const element: HTMLElement = document.getElementById('IdQuantidaDeVogais') as HTMLElement//declara constante,
    //tipa como HTML // e recebe o componente 
    element.innerHTML =  numeroVogais.toString(); //imprime a quantidade de vogais na tela 
}
