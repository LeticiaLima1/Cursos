export class Palavra{//criação da classe 

    vogais: Array<string> = ['a', 'e', 'i', 'o', 'u'];//propriedade 
    contador: number = 0;//propriedade
       
    nrVogais(palavra : string): number{
        for (let i = 0; i < palavra.length; i++) { //laço de repetição para percorrer os caracteres da palavra
            let letra: String = palavra.charAt(i).toLowerCase(); //atribuir a uma variável a letra atual do laço
            if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
                this.contador++;
            } 
        } // if para estabelecer quais são as vogais e setar no contador a quantidade  
        return this.contador; //retorna o número de vogais contadas
    }// funções, métodos das classes para implementar a apresentação
}

let palavra: Palavra = new Palavra();
let nrVogais = palavra.nrVogais('leti');// criação do objeto

console.log(nrVogais);//impressão do número de vogais  