class Figura{//declarar classe 
    
    id: number; //propriedade
    nome: string;//propriedade
    bio: string;//propriedade


    constructor( id: number, nome: string, bio: string) {// parametros
        this.nome = nome; // um construtor para criar o objeto
        this.id = id;// construtor
        this.bio = bio;//construtor
    }

    apresentar(): string{
        return this.nome ;
    }// funções, métodos das classes para implementar a apresentação
}

const ada: Figura = new Figura (1, 'Ada', 'Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina' );
const alanTuring: Figura = new Figura (2, 'Alan Turing', 'Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial');
const nikolaTesla: Figura = new Figura (3, 'Nikola Tesla', 'Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada.');
const nicolauCopernico: Figura = new Figura (4, 'Nicolau Copérnico', 'Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar.');

const listaFiguras: Array<Figura> = [ada, alanTuring, nikolaTesla, nicolauCopernico]// declara a lista de pessoas 

function apresentarPessoa(idNome: any){ //função que mostrará a pessoa

    const idFigura: Number = Number(idNome.value); // Cria uma variável do tipo número, recebe o valor do id transformando-o em número

    listaFiguras.forEach(figura =>{ //laço para percorrer a lista

        if(figura.id === idFigura){ //compara o id de quem foi escolhido com o id da Figura da classe
            document.getElementById("Nome").innerHTML = figura.apresentar(); //imprime o nome da Figura escolhida
        }

    })
}



